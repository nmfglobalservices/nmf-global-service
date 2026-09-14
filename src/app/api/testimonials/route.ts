import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export async function GET() {
  try {
    const snapshot = await getDocs(collection(firestore, "testimonials"));
    const allTestimonials = (snapshot.docs
      .map((document) => ({ id: document.id, ...(document.data() as Record<string, unknown>) })) as Array<Record<string, unknown> & { id: string }>)
      .filter((testimonial) => testimonial.active !== false)
      .sort((first, second) => Number(Boolean(second.featured)) - Number(Boolean(first.featured)));

    return NextResponse.json({ data: allTestimonials });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
