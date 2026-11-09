import { NextRequest, NextResponse } from "next/server";
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

const services = [
  "Medical Transcription",
  "Medical Billing Support",
  "Healthcare Data Entry",
  "Healthcare Data Management",
  "Power BI & Data Analytics",
  "Website Development",
  "Software Development",
  "IT Support",
  "Back-Office Support",
  "Other",
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    if (!isRecord(body)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const allowedFields = new Set([
      "fullName",
      "companyName",
      "email",
      "phone",
      "serviceRequired",
      "projectDetails",
    ]);
    if (Object.keys(body).some((field) => !allowedFields.has(field))) {
      return NextResponse.json({ error: "Unexpected inquiry field" }, { status: 400 });
    }

    const { fullName, companyName, email, phone, serviceRequired, projectDetails } = body;

    if (
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      typeof serviceRequired !== "string"
    ) {
      return NextResponse.json(
        { error: "Full name, email, and service are required" },
        { status: 400 }
      );
    }

    const normalizedFullName = fullName.trim();
    const normalizedEmail = email.trim();
    const normalizedService = serviceRequired.trim();
    const optionalTextFields = [companyName, phone, projectDetails];
    if (
      optionalTextFields.some(
        (value) => value !== undefined && value !== null && typeof value !== "string"
      )
    ) {
      return NextResponse.json({ error: "Invalid inquiry field" }, { status: 400 });
    }

    const normalizedCompanyName =
      typeof companyName === "string" ? companyName.trim() : "";
    const normalizedPhone = typeof phone === "string" ? phone.trim() : "";
    const normalizedProjectDetails =
      typeof projectDetails === "string" ? projectDetails.trim() : "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !normalizedFullName ||
      normalizedFullName.length > 200 ||
      !emailRegex.test(normalizedEmail) ||
      normalizedEmail.length > 254 ||
      !services.includes(normalizedService) ||
      normalizedCompanyName.length > 200 ||
      normalizedPhone.length > 50 ||
      normalizedProjectDetails.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please provide valid inquiry details" },
        { status: 400 }
      );
    }

    const result = await addDoc(collection(firestore, "inquiries"), {
      fullName: normalizedFullName,
      companyName: normalizedCompanyName || null,
      email: normalizedEmail,
      phone: normalizedPhone || null,
      serviceRequired: normalizedService,
      projectDetails: normalizedProjectDetails || null,
      status: "new",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return NextResponse.json(
      {
        message: "Inquiry submitted successfully",
        data: {
          id: result.id,
          fullName: normalizedFullName,
          email: normalizedEmail,
          serviceRequired: normalizedService,
          status: "new",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const snapshot = await getDocs(
      query(collection(firestore, "inquiries"), orderBy("createdAt", "desc"))
    );
    const allInquiries = snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));

    return NextResponse.json({ data: allInquiries });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}
