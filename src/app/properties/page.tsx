"use client";

import Link from "next/link";
import Image from "next/image";
import propertiesData from "@/data/properties.json";
import { Property } from "@/types/property";

export default function PropertiesPage() 
{
    const properties: Property[] = propertiesData as Property[];

    return (
        <div className = "min-h-screen bg-gray-50 p-6 md:p-10">
            <div className = "mx-auto max-w-6xl">
                <div className = "mb-8 flex items-center justify-between">
                    <h1 className = "text-3xl font-bold text-gray-900"> Rental Properties </h1>
                    <span className = "rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                        {properties.length} Listings
                    </span>
            </div>

            <div className = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {properties.map((property) => (
                    <Link
                        key = {property.id}
                        href = {`/properties/${property.id}`}
                        className = "overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className = "relative h-48 w-full bg-gray-200">
                                <Image
                                    src = {property.imageUrl}
                                    alt = {property.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className = "object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                            </div>

                            <div className = "p-5">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-gray-900">{property.name}</h2>
                                    <span className="text-lg font-extrabold text-blue-600">
                                        ${property.price}
                                        <span className ="text-xs font-normal text-gray-500">/mo</span>
                                    </span>
                                </div>

                                <p className="mt-1 text-sm font-medium text-gray-500">
                                    {property.address}, {property.city}, {property.state} {property.zip}
                                    </p>

                                <p className="mt-3 line-clamp-2 text-sm text-gray-600">
                                    {property.description}
                                </p>

                                <div className="mt-4 flex items-center justify-end text-sm font-semibold text-blue-600">
                                    View Details &rarr;
                                    </div>
                                </div>
                        </Link>
                ))}
            </div>
        </div>
        </div>
    );
}