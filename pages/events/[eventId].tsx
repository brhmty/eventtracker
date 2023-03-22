import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setIconColor, setIconSize } from "@/store/slices/eventSlice";
import Calendar from "../../components/icons/Calendar";
import MapPin from "../../components/icons/MapPin";
import Image from "next/image";
import { dataType } from "@/utils/types/my-types";
import { getEventById } from "@/helpers/api-utils";
import { getFeaturedEvents } from "@/helpers/api-utils";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

function SelectedEvent(props: { selectedEvent: dataType }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { selectedEvent } = props;

  useEffect(() => {
    dispatch(setIconColor("text-btnClrDark"));
    dispatch(setIconSize("eventId"));
  }, []);

  if (router.isFallback) {
    return (
      <p className="mx-auto my-[30vh] font-semibold 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs text-center text-black dark:text-white">
        ...Loading!
      </p>
    );
  }

  return (
    <div className="w-screen h-screen bg-primaryClr dark:btnClrDark">
      <div className="w-screen 2xl:h-[25rem] xl:h-52 lg:h-56 md:h-52 h-40 pt-20 flex justify-center max-lg:items-center items-baseline bg-btnClrDark dark:bg-primaryClrDark">
        <h1 className="2xl:text-8xl xl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-xl 2xl:mt-10 xl:mt-8 lg:mt-12 max-lg:mt-0 mt-8 font-extrabold text-white">
          {selectedEvent.title}
        </h1>
      </div>
      <div className="2xl:w-2/3 lg:w-1/2 w-2/3 2xl:h-[28rem] xl:h-72 lg:h-64 md:h-96 sm:h-[21rem] h-72 rounded-lg max-lg:my-8 md:my-16 max-lg:mx-auto flex lg:flex-row flex-col items-center lg:absolute 2xl:top-56 xl:top-28 lg:top-32 lg:left-[50%] lg:translate-x-[-50%] bg-white shadow-lg dark:bg-secondaryClrDark">
        <div className="lg:w-1/3 w-full lg:h-full h-1/3 flex items-center">
          <Image
            className="2xl:w-96 xl:w-52 lg:w-48 max-lg:w-full max-lg:h-full lg:aspect-square object-cover lg:ml-8"
            src={`/${selectedEvent.image}`}
            alt="image"
            width="300"
            height="300"
          />
        </div>
        <div className="p-6 lg:ml-8 max-lg:mt-4 flex flex-col">
          <div className="mb-8 h-fit flex lg:flex-col">
            <span className="mr-2 dark:text-white">
              <Calendar />
            </span>
            <h4 className="lg:mb-4 2xl:text-2xl lg:text-base md:text-2xl sm:text-xl text-sm text-neutral-600 dark:text-neutral-200">
              {selectedEvent.date}
            </h4>
          </div>
          <div className="h-fit flex lg:flex-col max-lg:items-center">
            <span className="mr-2 dark:text-white">
              <MapPin />
            </span>
            <h3 className="2xl:text-2xl lg:text-base md:text-2xl sm:text-xl text-sm text-neutral-500 dark:text-neutral-300">
              {selectedEvent.location}
            </h3>
          </div>
        </div>
      </div>
      <h3 className="lg:p-20 md:p-12 p-4 2xl:text-3xl lg:text-xl md:text-lg text-base 2xl:font-extrabold lg:font-bold md:font-semibold font-medium text-center lg:absolute 2xl:top-[42rem] xl:top-[25rem] lg:top-[25rem]">
        {selectedEvent.description}
      </h3>
    </div>
  );
}

export async function getStaticProps(context: Params) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  const notFound = event ? false : true;

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 3600,
    notFound,
  };
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();
  const paths = allEvents.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: true,
  };
}

export default SelectedEvent;
