"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import propertiesData from "@/data/properties.json";
import { Property } from "@/types/property";

export default function PropertyDetailPage({
    params,
}: {
    params: Promise<{ id:string }>;
}) {

    const resolvedParams = use(params);
    const properties: Property[] = propertiesData as Property[];

    const property = properties.find((p) => p.id === resolvedParams.id);

    if (!property) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
                <h1 className="text-2xl font-bold text-black">Property Not Found</h1>
                <p className="mt-2 text-gray-600">No listing matches ID: {resolvedParams.id}</p>
                <Link
                    href="/properties"
                    className="mt-4 rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                >
                    &larr; Back to Properties
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="mx-auto max-w-4xl">
                <Link
                    href="/properties"
                    className="mb-6 inline-block font-semibold text-blue-600 hover:underline"
                    >
                        &larr; Back to Properties
                    </Link>

                    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                        <div className="relative h-80 w-full bg-gray-200">
                            <Image
                                src={property.imageUrl}
                                alt={property.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-8">
                            <div className="flex items-center justify-between">
                                <h1 className="text-3xl font-bold text-gray-900">{property.name}</h1>
                                <span className="text-2xl font-extrabold text-blue-600">
                                    ${property.price}
                                    <span className="text-sm font-normal text-gray-500">/mo</span>
                                </span>
                            </div>

                            <p className="mt-2 text-gray-600">
                                {property.address}, {property.city}, {property.state} {property.zip}
                            </p>

                            <hr className="my-6 border-gray-300" />

                            <h2 className="text-xl font-bold text-gray-800">About this listing</h2>

                            <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Welcome to <strong>{property.name}</strong>, located at {property.address} in {property.city}, {property.state}. {property.description}
                                </p>

                                <p>
                                    Listed at <strong>${property.price}/month</strong>, this property offers all the amenities you and your family need for a comfortable stay in {property.city}.
                                </p>

                                <p>
                                    Don't miss the opportunity to make <strong>{property.name}</strong> your new home. Contact us today to schedule a viewing or for more information!
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}