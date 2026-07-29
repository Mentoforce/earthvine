"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { arapey, jost } from "@/app/layout";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Dwarka, Delhi",
    rating: 5,
    review:
      "Earthvine transformed our apartment beautifully. The team was professional, punctual and delivered exactly what they promised. Highly recommended!",
  },
  {
    name: "Rahul Malhotra",
    location: "Gurugram",
    rating: 4,
    review:
      "Amazing experience! They understood our vision perfectly and the results exceeded our expectations. On-time delivery with great attention to detail.",
  },
  {
    name: "Neha Verma",
    location: "Noida",
    rating: 4,
    review:
      "Very smooth process from start to finish. The 3D designs helped us visualise the space beforehand. Pricing was transparent with no hidden costs.",
  },
];

export default function ClientReviews() {
  return (
    <section className="bg-[#F6F3EE] py-11 lg:py-19">
      <div className="mx-auto max-w-400 px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p
            className={`${jost.className}
            text-[18px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#795547]`}
          >
            WHAT OUR CLIENTS SAY
          </p>

          <h2
            className={`${arapey.className}
            mt-4
            text-[34px]
            lg:text-[45px]
            leading-[95%]
            text-[#38393B]
            font-normal`}
          >
            Client Reviews
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                rounded-[19px]
                bg-[rgba(121,85,71,0.39)]
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              {/* Stars */}

              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={19}
                    fill={i < review.rating ? "#FFC107" : "#E5E7EB"}
                    color={i < review.rating ? "#FFC107" : "#E5E7EB"}
                  />
                ))}
              </div>

              {/* Review */}

              <p
                className={`${arapey.className}
                min-h-25
                text-[20px]
                italic
                leading-[1.45]
                text-[#3C2A20]`}
              >
                “{review.review}”
              </p>

              {/* User */}

              <div className="mt-5 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[rgba(121,85,71,0.49)]
                    text-[16px]
                    font-semibold
                    text-[#3C2A20]
                  "
                >
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3
                    className={`${jost.className}
                    text-[18px]
                    font-semibold
                    text-[#3C2A20]`}
                  >
                    {review.name}
                  </h3>

                  <p
                    className={`${jost.className}
                    text-[16px]
                    text-[#5D514A]`}
                  >
                    {review.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
