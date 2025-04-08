"use client";

import { FC, ReactNode } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Icon } from "leaflet";
import Image from "next/image";

import { ADDRESS } from "@/shared/constants/map";
import { socialMediaList } from "@/shared/mocks/content";

import { H2 } from "@/components/H2/H2";

import s from "./Map.module.scss";
import "leaflet/dist/leaflet.css";

export const Map: FC = (): ReactNode => {
  const defaultIcon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <section className={s.section}>
      <MapContainer
        className={s.map}
        center={ADDRESS}
        zoom={12}
        zoomControl={false}
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        boxZoom={false}
        keyboard={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={ADDRESS} icon={defaultIcon} />
      </MapContainer>

      <div className={s.contacts}>
        <H2 text="Contacts:" className={s.title} />
        <address className={s.address}>
          Erwitter Str. 40, 59590 Geseke GERMANY
        </address>
        <a href="tel:+492942" className={s.tel}>
          +49 29 42 / 97 83 71
        </a>
        <a href="email:info@m-bp.de" className={s.email}>
          info@m-bp.de
        </a>
        <div className={s.socialMedia}>
          <div>Our Social Media:</div>
          <ul className={s.list}>
            {socialMediaList.map((el) => (
              <li key={el.name}>
                <a href={el.link}>
                  <Image src={el.logo} alt={el.name} width={30} height={30} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
