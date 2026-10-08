// import Image from "next/image";
// import { jost, playfairDisplay } from "@/lib/fonts";

// const testimonials = [
//   {
//     image: "/bonsai/testimonial-sarah.png",
//     review:
//       "“Absolutely love this plant shop! Beautiful, healthy plants and a great selection. The ordering process was smooth and the plant arrived in perfect condition — exactly the perfect plant for my home. The packaging was very impressive. I'll definitely be ordering again!”",
//     name: "Sarah M.",
//     role: "plant lover",
//   },
//   {
//     image: "/bonsai/testimonial-emily.png",
//     review:
//       "“Absolutely love this plant shop! Beautiful, healthy plants and a great selection. The ordering process was smooth and the plant arrived in perfect condition — exactly the perfect plant for my home. The packaging was very impressive. I'll definitely be ordering again!”",
//     name: "Emily R.",
//     role: "plant lover",
//   },
// ];

// function TestimonialCard({
//   review,
//   name,
//   role,
// }: {
//   review: string;
//   name: string;
//   role: string;
// }) {
//   return (
//     <article
//       className="flex w-full items-start"
//       style={{
//         padding: "32.236px",
//         gap: "27px",
//         borderRadius: "21.491px",
//         border: "1.075px solid #DCFCE7",
//         background: "rgba(224, 196, 158, 0.20)",
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Image */}
//       {/* <div
//         className="relative shrink-0 overflow-hidden"
//         style={{
//           width: "107.454px",
//           height: "171.926px",
//           borderRadius: "18.804px",
//           background: "#D3D3D3",
//         }}
//       >
//         <Image
//           src={image}
//           alt={name}
//           fill
//           sizes="107.454px"
//           className="object-cover"
//         />
//       </div> */}

//       {/* Content */}
//       <div
//         className="flex min-w-0 flex-1 flex-col"
//         style={{
//           alignSelf: "stretch",
//         }}
//       >
//         <p
//           className={jost.className}
//           style={{
//             width: "385.491px",
//             maxWidth: "100%",
//             margin: 0,
//             color: "rgba(25, 43, 25, 0.75)",
//             fontSize: "18.804px",
//             fontStyle: "italic",
//             fontWeight: 400,
//             lineHeight: "30.557px",
//           }}
//         >
//           {review}
//         </p>

//         <div
//           style={{
//             marginTop: "20px",
//           }}
//         >
//           {/* Stars */}
//           <div
//             className={jost.className}
//             aria-label="5 star rating"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "4px",
//               color: "#E9A52B",
//               fontSize: "18.804px",
//               lineHeight: "18.804px",
//             }}
//           >
//             <span>★</span>
//             <span>★</span>
//             <span>★</span>
//             <span>★</span>
//             <span>★</span>
//           </div>

//           {/* Name */}
//           <h3
//             className={jost.className}
//             style={{
//               margin: "14px 0 0",
//               color: "#192B19",
//               fontSize: "20px",
//               fontStyle: "normal",
//               fontWeight: 600,
//               lineHeight: "26.863px",
//             }}
//           >
//             {name}
//           </h3>

//           {/* Role */}
//           <p
//             className={jost.className}
//             style={{
//               margin: "2px 0 0",
//               color: "#6B8A6B",
//               fontSize: "16px",
//               fontStyle: "normal",
//               fontWeight: 400,
//               lineHeight: "21.491px",
//             }}
//           >
//             {role}
//           </p>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function BonsaiTestimonials() {
//   return (
//     <section
//       className="relative z-[100] w-full overflow-hidden"
//       style={{
//         background: "#FFFFFF",
//         paddingTop: "43px",
//         paddingBottom: "32px",
//       }}
//     >
//       {/* Heading */}
//       <div
//         className="mx-auto w-full px-6 text-center"
//         style={{
//           paddingTop: "8px",
//           paddingBottom: "60px",
//         }}
//       >
//         <h2
//           className={playfairDisplay.className}
//           style={{
//             margin: 0,
//             color: "#3C2A20",
//             fontFamily: '"Frank Ruhl Libre", serif',
//             fontSize: "45px",
//             fontStyle: "normal",
//             fontWeight: 600,
//             lineHeight: "53.727px",
//           }}
//         >
//           Our Happy Customers Say It Best
//         </h2>

//         <p
//           className={jost.className}
//           style={{
//             margin: "14px 0 0",
//             color: "#504E4C",
//             textAlign: "center",
//             fontSize: "20px",
//             fontStyle: "normal",
//             fontWeight: 400,
//             lineHeight: "26.863px",
//           }}
//         >
//           Real reviews from real plant lovers who found their green.
//         </p>
//       </div>

//       {/* Testimonials */}
//       <div
//         className="mx-auto grid w-full grid-cols-1 justify-center px-6 md:grid-cols-2"
//         style={{
//           maxWidth: "1196px",
//           columnGap: "26.863px",
//           rowGap: "26.863px",
//         }}
//       >
//         {testimonials.map((testimonial) => (
//           <TestimonialCard
//             key={testimonial.name}
//             review={testimonial.review}
//             name={testimonial.name}
//             role={testimonial.role}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

import { jost, playfairDisplay } from "@/lib/fonts";

const testimonials = [
  {
    review:
      "“Such a wonderful experience from start to finish! The plants were lush, well-rooted, and clearly cared for before shipping. Packaging was sturdy and thoughtful, arriving without a single bent leaf. Already planning my next order from this shop!”",
    name: "Tina M.",
    role: "plant lover",
  },
  {
    review:
      "“Absolutely love this plant shop! Beautiful, healthy plants and a great selection. The ordering process was smooth and the plant arrived in perfect condition — exactly the perfect plant for my home. The packaging was very impressive. I'll definitely be ordering again!”",
    name: "Naira R.",
    role: "plant lover",
  },
];

function TestimonialCard({
  review,
  name,
  role,
}: {
  review: string;
  name: string;
  role: string;
}) {
  return (
    <article
      className="w-full"
      style={{
        padding: "32.236px",
        borderRadius: "21.491px",
        border: "1.075px solid #DCFCE7",
        background: "rgba(224, 196, 158, 0.20)",
        boxSizing: "border-box",
      }}
    >
      <div
        className="flex w-full flex-col"
        style={{
          alignSelf: "stretch",
        }}
      >
        {/* Review */}
        <p
          className={jost.className}
          style={{
            width: "100%",
            margin: 0,
            color: "rgba(25, 43, 25, 0.75)",
            fontSize: "18.804px",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "30.557px",
          }}
        >
          {review}
        </p>

        {/* Rating + customer details */}
        <div
          style={{
            marginTop: "20px",
          }}
        >
          {/* Stars */}
          <div
            aria-label="5 star rating"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "#E9A52B",
              fontSize: "18.804px",
              lineHeight: "18.804px",
            }}
          >
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          {/* Name */}
          <h3
            className={jost.className}
            style={{
              margin: "14px 0 0",
              color: "#192B19",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "26.863px",
            }}
          >
            {name}
          </h3>

          {/* Role */}
          <p
            className={jost.className}
            style={{
              margin: "2px 0 0",
              color: "#6B8A6B",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "21.491px",
            }}
          >
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function BonsaiTestimonials() {
  return (
    <section
      className="relative z-[100] w-full overflow-hidden"
      style={{
        background: "#FFFFFF",
        paddingTop: "43px",
        paddingBottom: "32px",
      }}
    >
      {/* Heading */}
      <div
        className="mx-auto w-full px-6 text-center"
        style={{
          paddingTop: "8px",
          paddingBottom: "60px",
        }}
      >
        <h2
          className={playfairDisplay.className}
          style={{
            margin: 0,
            color: "#3C2A20",
            fontFamily: '"Frank Ruhl Libre", serif',
            fontSize: "45px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "53.727px",
          }}
        >
          Our Happy Customers Say It Best
        </h2>

        <p
          className={jost.className}
          style={{
            margin: "14px 0 0",
            color: "#504E4C",
            textAlign: "center",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "26.863px",
          }}
        >
          Real reviews from real plant lovers who found their green.
        </p>
      </div>

      {/* Testimonials */}
      <div
        className="mx-auto grid w-full grid-cols-1 justify-center px-6 md:grid-cols-2"
        style={{
          maxWidth: "1196px",
          columnGap: "40px",
          rowGap: "26.863px",
        }}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            review={testimonial.review}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </div>
    </section>
  );
}
