import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { DestinationCard, type Destination } from "./DestinationCard";

const DESTINATIONS: Destination[] = [
  {
    label: "City",
    title: "Beirut",
    imageAlt: "The Pigeon Rocks of Raouche in Beirut",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnU_ObcKRc4OEkD2pcxinrOpJAhjQkKZuzUKAuXNd9QihV46cShCPhxBGoCOUghfChxEDh79t4wb39Hg45p6YPryQYS37IxUrJ5tbsze2BqQuSG0c6o39IH58k_lXW0M_XHozAiwYMq4QbX0gblVTdKV3wVcdHXLblJhGtfLX7ArontVHe0ssq8M04Obg6z4KVjThQvqWIGdW2OB1_yOLDybGveKfVRo7oSOQHkAbEumSKyZcPjtAttncLKc1oN6EpgyuzxnHouRI",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    label: "Coastal",
    title: "Byblos",
    imageAlt: "Old harbor of Byblos",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDy9gDPDH_AT8J2CxLflDimjT_ysB7vowuBcvx_8tTQODWZVtFVemUdwXK5AM5kejWyhfj_fJe8dfJbBci8WWQ0x1_mDLF_S5DE52SIJUn1vPRSh2rJm6BurGtCpOrBXDdH_799ahl7aMp08y4UR0cAd5SrUyERHOOW16sruXnOH3N-rHfZokNpTwE3Yf1CKXlUJhIeCI77pEw2WRzSXLoPzX4dSkSx4tZFIdLh7fx_O_ZsaUvlGkxJoOz506AFwi2F_woXSOJWEzQ",
  },
  {
    label: "Mountain",
    title: "Faraya",
    imageAlt: "Snowy mountains of Faraya",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJBNUqXOJ5xhYoPpfHZiUW_DqB-BN19KSALoxRWnIoAACDDgu6qxvhqcw4DdF8-98V9-jGamhHZr0lrlJILlJ6FLhilcDc3fvSJ1XKv-P1zSZybiCmJb1NyQ92sbt3nSZn2R0B8O3YuFoGMCIWM_ZXHNEDlQZM7a-1zWkMmRq7oETtsIR3oRCQgIdpGflUxK1ehFGyePRqyTevI7EahVLNRLk-hSBAkWw6jLz5-qzR_p-bpv50kEwjo8sacFLIoWTjzoNIisIfKkc",
  },
  {
    label: "Beach",
    title: "Tyre",
    imageAlt: "Ruins in Tyre by the sea",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6zH-Bp3_8-Rs8tVDHFYzlT0OFJBzqTfWET0-VL1GEKB9sZrVoqsgve_OdAYS4rNpINAVrVjIdXBqZN_ecXl4fhXhsxQjpTxUiyug40FWsgg8OB0ZZdm6ezHqu2DAULudB8wolOavK0T9pWEd1btBguizzyuoSEZIRJzGWFuGHGwc6ir3Sf39HQa2nC1dAi9w5aA8Tiw7_KWWLtYPZES7ZFvIbAjRtJrMkCIqMCga6gBUwin4QKJet6JCgVgbS7GSDIOB8endl5xc",
  },
  {
    label: "Nature",
    title: "Qadisha",
    imageAlt: "Mountain view in Kadisha Valley",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkCorHmAgZvE3GeR2SMlbVGJbky0Eo9loc5NILLX-0CoNj9Nc25_jLUI92i0HP_uNuHfNdOz2FeA8lY7fKbQNKfCw2LwbZK6Zu0cXEkpD2TPTyaYZ_-iT8n2udVL6o1v6NY3BvNGYFTFkbo4jwzunvvUrE3hCuOp4YenliWulcd9SxRwyxDEYgFYoSKfxurQ82C8NUqjDnfVNm0UeEi7o5MMCYBIwjt5beMrSrGMHsUECKLDOO-v7cAJHU_kLdYQSfUIIJ50u1izQ",
  },
];

export function PopularDestinations() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-8">
        <SectionTitle title="Popular Destinations" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px]">
        {DESTINATIONS.map((item) => (
          <DestinationCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}