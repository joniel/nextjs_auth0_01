import React from 'react';

import Link from 'next/link';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Verse from '../models/Verse';
import dbConnect from '../lib/dbConnect'

export default function Index({ verses }) {

  return (
    <>
      <Hero />


      성경보여주기!

      <div className='m-1 p-2 border border-2'>
        <Link href="/?chapter=2"><button className='btn btn-outline-success me-1'>2장</button></Link>
        <Link href="/?chapter=3"><button className='btn btn-outline-success me-1'>3장</button></Link>
        <Link href="/?chapter=4"><button className='btn btn-outline-success me-1'>4장</button></Link>
      </div>

      <ul className=''>
        {verses.map((verse) => (
          <li key={verse._id}>
            <span className='text-danger me-2'>{verse.chapter}:{verse.verse}</span>
            {verse.context}</li>
        ))}
      </ul>

      <hr />
      <Content />
    </>
  );
}



//이건 단지 초기값만 위한 것일까? 장절은 어떻게 호출을... 
/* Retrieves task(s) data from mongodb database */
export async function getServerSideProps(context) {
  await dbConnect()

  console.log("context query", context.query.chapter);

  const result = await Verse.find({ "book": 43, "chapter": context.query.chapter })
    .sort({ "book": 1, "chapter": 1, "verse": 1 })
  console.log(result)
  const verses = result.map((doc) => {
    const verse = doc.toObject()
    verse._id = verse._id.toString()
    return verse
  })


  return { props: { verses: verses } }
}
