import React from "react";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
function NewsletterRegistration() {
  const schema = z.object({
    email: z.string().email(),
  });

  type FormValues = {
    email: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormValues) => {
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: data.email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    reset();
  };

  return (
    <div className="w-fit h-20 mt-24 mx-auto flex flex-col items-center">
      <h3 className="mb-4 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs text-[7px] text-black dark:text-white">
        Sign up to stay updated!
      </h3>
      <form className="flex" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder=" Your email"
          className="2xl:w-64 xl:w-52 lg:w-40 md:w-32 w-28 lg:h-8 md:h-10 sm:h-8 h-6"
          {...register("email")}
        />
        <Button buttonType="newsletter-registration" />
      </form>
      <h5 className="w-fit mt-1 self-start text-red-600">
        {errors.email?.message?.toLowerCase()}
      </h5>
    </div>
  );
}

export default NewsletterRegistration;
