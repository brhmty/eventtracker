import React from "react";
import Link from "next/link";
import { dataType } from "@/public/data/my-types";
//injectedTo---EventList.tsx

function EventItem(props: { event: dataType }) {
  const { title, date, location, image } = props.event;
  const formattedDate = new Date(date as string).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location?.replace(", ", "\n");
  return (
    <li>
      <img src={`/${image}`} alt={image} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{formattedDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
          <div>
            <Link href="/">Explore Event</Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
