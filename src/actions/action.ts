"use server";

import prisma from "@/lib/db";
import { defaultImgPlaceholderPath } from "@/utils/constants";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createBlog(formData: FormData) {
    try {
        await prisma.blog.create({
            data: {
                title: formData.get('title') as string,
                slug: (formData.get('title') as string).replace(/\s+/g, "-").toLowerCase(),
                content: JSON.stringify(formData.get('content') as string),
                description: formData.get('description') as string,
                img: (formData.get('img') as string) || defaultImgPlaceholderPath
            }
        })
    
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            switch (err.code) {
                case 'P2002':
                    console.log("There is a unique constraint violation.");
                    // Handle unique constraint violation (e.g., logging or sending a response)
                    break;
                case 'P2003':
                    console.log("Foreign key constraint failed.");
                    // Handle foreign key constraint failure
                    break;
                case 'P2004':
                    console.log("The operation violates a required field.");
                    // Handle required field violation
                    break;
                case 'P2010':
                    console.log("The provided value for the field is invalid.");
                    // Handle invalid value for a field
                    break;
                // Add other cases for different error codes as needed
                default:
                    console.log("An unknown error occurred:", err.message);
                    break;
            }
        } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
            console.log("An unknown error occurred:", err.message);
        } else {
            console.log("A different error occurred:", err);
        }
    }

    redirect('/admin')

}


export async function editBlog(formData: FormData) {
    await prisma.blog.update({
        where: {
            id: formData.get('id') as string
        },
        data: {
            title: formData.get('title') as string,
            // slug: (formData.get('title') as string).replace(/\s+/g, "-").toLowerCase(),
            content: JSON.stringify(formData.get('content') as string),
            description: formData.get('description') as string,
            img: (formData.get('img') as string) || defaultImgPlaceholderPath
        }
    })

    redirect('/admin')
}


export async function deleteBlog(formData: FormData) {
    await prisma.blog.delete({
        where: {
            id: formData.get('id') as string
        }
    })

    revalidatePath('/admin')
}