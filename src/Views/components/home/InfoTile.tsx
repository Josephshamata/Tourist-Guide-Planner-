import React from "react";
import { Icon } from "../common/Icon";

export type InfoItem = {
  icon: string;
  title: string;
  description: string;
};

export function InfoTile({ item }: { item: InfoItem }) {
  return (
    <div className="text-center group">
      <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
        <Icon name={item.icon} className="text-primary text-3xl" />
      </div>
      <h5 className="font-bold text-slate-900 mb-1">{item.title}</h5>
      <p className="text-xs text-slate-500">{item.description}</p>
    </div>
  );
}