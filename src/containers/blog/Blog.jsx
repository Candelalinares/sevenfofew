import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05,blog06, blog07, blog08, blog09, blog10,blog11 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="team">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">THE TEAM</h1>
      <p>A group of creatives, professionals and investors wanted to try out a crazy new idea.</p>
    </div>
    <div className="gpt3__blog-container">
{/*      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Ale Duarte" text="Marketing" />
</div>*/}
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog01} date="Ale Duarte" text="Marketing" />
        <Article imgUrl={blog02} date="Lucas Gamboa" text="Productor Audiovisual" />
        <Article imgUrl={blog03} date="Iñaki Arredondo" text="Guionista" />
        <Article imgUrl={blog04} date="Yesica Vivas" text="Marketing / RR.SS" />
        <Article imgUrl={blog06} date="Brin Ansaldo" text="Administracion" />
        <Article imgUrl={blog07} date="Rio" text="Administracion" />
        <Article imgUrl={blog08} date="Mel Pardo" text="Audiovisual" />
        <Article imgUrl={blog09} date="***" text="***" />
        <Article imgUrl={blog10} date="***" text="***" />
        <Article imgUrl={blog11} date="Bele Sanchez" text="Diseñadora gráfica" />
      </div>
    </div>
  </div>
);

export default Blog;