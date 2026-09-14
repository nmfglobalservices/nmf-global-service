import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export async function GET() {
  try {
    const snapshot = await getDocs(collection(firestore, "services"));
    const allServices = (snapshot.docs
      .map((document) => ({ id: document.id, ...(document.data() as Record<string, unknown>) })) as Array<Record<string, unknown> & { id: string }>)
      .filter((service) => service.active !== false)
      .sort((first, second) => Number(first.order || 0) - Number(second.order || 0));

    return NextResponse.json({ data: allServices });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
