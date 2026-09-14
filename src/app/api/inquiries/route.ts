import { NextRequest, NextResponse } from "next/server";
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      companyName,
      email,
      phone,
      serviceRequired,
      projectDetails,
    } = body;

    // Validation
    if (!fullName || !email || !serviceRequired) {
      return NextResponse.json(
        { error: "Full name, email, and service are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const result = await addDoc(collection(firestore, "inquiries"), {
      fullName,
      companyName: companyName || null,
      email,
      phone: phone || null,
      serviceRequired,
      projectDetails: projectDetails || null,
      status: "new",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return NextResponse.json(
      { message: "Inquiry submitted successfully", data: { id: result.id, fullName, email, serviceRequired, status: "new" } },
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
