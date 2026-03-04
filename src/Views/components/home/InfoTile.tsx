// import React from "react";
// import { Icon } from "../common/Icon";

// export type InfoItem = {
//   icon: string;
//   title: string;
//   description: string;
// };

// export function InfoTile({ item }: { item: InfoItem }) {
//   return (
//     <div className="text-center group">
//       <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
//         <Icon name={item.icon} className="text-primary text-3xl" />
//       </div>
//       <h5 className="font-bold text-slate-900 mb-1">{item.title}</h5>
//       <p className="text-xs text-slate-500">{item.description}</p>
//     </div>
//   );
// }
// import React from "react";
// import { Icon } from "../common/Icon";

// export type InfoItem = {
//   icon: string; // material symbol name
//   title: string;
//   description: string;
// };

// export function InfoTile({ item }: { item: InfoItem }) {
//   return (
//     <div
//       className={[
//         "group h-full rounded-2xl bg-white",
//         "border border-slate-100",
//         "p-6 shadow-sm",
//         "transition-all duration-300",
//         "hover:-translate-y-1 hover:shadow-md hover:border-slate-200",
//       ].join(" ")}
//     >
//       {/* Icon bubble */}
//       <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-[1.03]">
//         <Icon name={item.icon} className="text-2xl" />
//       </div>

//       <h4 className="font-extrabold text-slate-900">{item.title}</h4>
//       <p className="mt-2 text-sm text-slate-600 leading-relaxed">
//         {item.description}
//       </p>
//     </div>
//   );
// }

import React from "react";
import { Icon } from "../common/Icon";

export type InfoItem = {
  icon: string;
  title: string;
  description: string;
};

export function InfoTile({ item }: { item: InfoItem }) {
  return (
    <div
      className={[
        "group h-full rounded-2xl bg-white",
        "border border-slate-100",
        "p-6 shadow-sm",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-md hover:border-slate-200",
        "text-center"
      ].join(" ")}
    >
      {/* Icon circle */}
      <div
        className="
        mx-auto mb-4
        h-14 w-14
        rounded-full
        bg-primary/10
        text-primary
        flex items-center justify-center
        transition-transform duration-300
        group-hover:scale-105
      "
      >
        <Icon name={item.icon} className="text-2xl" />
      </div>

      {/* Title */}
      <h4 className="font-extrabold text-slate-900">{item.title}</h4>

      {/* Description */}
      <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
        {item.description}
      </p>
    </div>
  );
}
