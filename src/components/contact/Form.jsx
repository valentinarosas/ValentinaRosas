"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // you can not send more then 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully! I'll get back to you soon.", {
            id: toastId,
          });
          reset(); // Reset form after successful submission
        },
        (error) => {
          console.error("Failed to send message:", error);
          toast.error(
            "Failed to send message. Please try again or contact directly.",
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Valerie",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.div variants={item} className="w-full sm:w-3/4 md:w-3/5">
          <motion.input
            variants={item}
            type="text"
            placeholder="name"
            className="w-full px-4 py-3 bg-transparent border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 hover:shadow-glass-sm hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 ease-in-out backdrop-blur-sm custom-bg"
            {...register("name", {
              required: "This field is required!",
              minLength: {
                value: 3,
                message: "Name should be atleast 3 characters long.",
              },
            })}
          />
          {errors.name && (
            <span className="inline-block self-start text-accent">
              {errors.name.message}
            </span>
          )}
        </motion.div>

        <motion.div variants={item} className="w-full sm:w-3/4 md:w-3/5">
          <motion.input
            variants={item}
            type="email"
            placeholder="email"
            className="w-full px-4 py-3 bg-transparent border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 hover:shadow-glass-sm hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 ease-in-out backdrop-blur-sm custom-bg"
            {...register("email", { required: "This field is required!" })}
          />
          {errors.email && (
            <span className="inline-block self-start text-accent">
              {errors.email.message}
            </span>
          )}
        </motion.div>

        <motion.div variants={item} className="w-full sm:w-3/4 md:w-3/5">
          <motion.textarea
            variants={item}
            placeholder="message"
            rows={5}
            className="w-full px-4 py-3 bg-transparent border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 hover:shadow-glass-sm hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 ease-in-out backdrop-blur-sm resize-none custom-bg"
            {...register("message", {
              required: "This field is required!",
              maxLength: {
                value: 500,
                message: "Message should be less than 500 characters",
              },
              minLength: {
                value: 50,
                message: "Message should be more than 50 characters",
              },
            })}
          />
          {errors.message && (
            <span className="inline-block self-start text-accent">
              {errors.message.message}
            </span>
          )}
        </motion.div>

        <motion.button
          variants={item}
          type="submit"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm hover:border-accent/50 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 ease-in-out backdrop-blur-sm cursor-pointer capitalize
      "
        >
          Send Message!
        </motion.button>
      </motion.form>
    </>
  );
}
