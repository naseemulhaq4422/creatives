import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppMessage(type: 'agency' | 'institute' | 'general', data?: Record<string, string>) {
  if (type === 'agency') {
    const service = data?.service ? ` Interested in: ${data.service}.` : '';
    const budget = data?.budget ? ` Estimated budget: ${data.budget}.` : '';
    const req = data?.requirements ? ` Requirements: ${data.requirements}.` : '';
    const name = data?.name ? ` My name is ${data.name}.` : '';
    return encodeURIComponent(`Hello Creatives Digital Agency!${name} I would like to request a proposal for digital services.${service}${budget}${req}`);
  }
  if (type === 'institute') {
    const course = data?.course ? ` Selected Course: ${data.course}.` : '';
    const background = data?.background ? ` Current Background: ${data.background}.` : '';
    const name = data?.name ? ` My name is ${data.name}.` : '';
    return encodeURIComponent(`Hello Creatives Training Institute!${name} I want to apply for admission in the upcoming batch.${course}${background}`);
  }
  return encodeURIComponent("Hello Creatives Digital Agency & Institute! I would like to inquire about your services and institute batches.");
}
