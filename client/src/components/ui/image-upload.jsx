"use client";

import { UploadButton } from "@uploadthing/react";
import { UploadDropzone } from "@uploadthing/react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { set } from "date-fns";

const UploadIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 dark:fill-white fill-black" viewBox="0 -960 960 960" height="24" width="24">
        <path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
      </svg>
    );
  };
  
  
  

export function ImageUpload({changeUrl, setLoading}) {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    
    return (
        
        <div className="border border-dashed border-gray-200 rounded-lg w-full p-6 flex items-center justify-center gap-4 text-center border-gray-200 dark:border-gray-800 mb-3">
            <div className="grid w-full gap-7 text-center">
                <div className="h-10 grid place-items-center">
                    {imageUrl.length ? <div>
                        <Image src={imageUrl} alt="Uploaded image" width={50} height={50} />
                        
                    </div>:<UploadIcon />}
                </div>
                {isUploading ? <Progress value={uploadProgress} />:
                <UploadButton

                    appearance={{
                        button: "bg-primary text-primary-foreground hover:bg-primary/90 text-sm ut-uploading:cursor-not-allowed h-9",
                            
                        }}
                            
                    content = {{
                        button({isUploading}){
                            if(isUploading){
                                setIsUploading(true);
                            } else {
                                return "Upload an image";
                                }
                            }
                        }}
                            
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        console.log("Upload complete for userId:");
                        console.log("file url");
                        console.log("metadata");
                        setIsUploading(false);
                        setUploadProgress(0);
                        setImageUrl(res[0].url)
                        changeUrl(res[0].url);
                        setLoading(false);
                    }}

                    onUploadProgress={(uploadProgress) => {
                        setUploadProgress(uploadProgress);
                    }}

                    onUploadBegin={() => {
                        setLoading(true);
                    }}

                    onUploadError={(error) => {
                        alert("Upload error");
                    }}
                       />
                        
                
                    }
                    </div>
                </div>
    );
}
