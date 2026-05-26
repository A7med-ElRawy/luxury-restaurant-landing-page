/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'Appetizers' | 'Mains' | 'Desserts' | 'Elixirs';
  description: string;
  price: string;
  image: string;
  dietary: string[];
  signature: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface ReservationDetails {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  requests?: string;
}
