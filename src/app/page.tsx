"use client"

import styles from "./page.module.css"
import Image from "next/image"

import { useRef, createRef, useState, useEffect, use } from "react"

import Plane from "@/components/Plane"

import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"

const imgs = [img1, img2, img3]

const imgStyle = {
  opacity: 0,
  width: "100%",
}

export default function Home() {
  const myRefs = useRef([])
  myRefs.current = imgs.map((element, i) => myRefs.current[i] ?? createRef())

  const [textures, setTextures] = useState<any>([])

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    onImageLoad()
  }, [loaded])

  const onImageLoad = () => {
    const imgsSrc = Array.from(document.querySelectorAll(".project__img"))

    imgsSrc.forEach((img) => {
      setTextures((prev: any) => [...prev, img.getAttribute("src")])
    })
  }

  return (
    <section className={styles.home__hero__section}>
      {imgs.map((img, i) => {
        return (
          <div key={i}>
            <div className={styles.project__div}>
              <Image
                style={imgStyle}
                src={img}
                onLoad={() => setLoaded(true)}
                alt={`project-${i}`}
                className="project__img"
                ref={myRefs.current[i]}
              />
              <h1 className={styles.title}>Project 2</h1>
            </div>
            {loaded && <Plane elRef={myRefs.current[i]} img={textures[i]} />}
          </div>
        )
      })}
    </section>
  )
}
