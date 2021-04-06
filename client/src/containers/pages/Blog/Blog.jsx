import React, { Component } from "react";
import img from "../../../img/blog/photo-1534126511673-b6899657816a.jpg";
import img2 from "../../../img/blog/kyle-loftus-596319-unsplash-cropped-2.jpg";
import img3 from "../../../img/blog/ian-dooley-347942-unsplash.jpg";
import img4 from "../../../img/blog/ian-dooley-347962-unsplash.jpg";
import img5 from "../../../img/blog/rahul-anil-214671-unsplash.jpg";

class Blog extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Blog</h1>
          <h2>Welcome</h2>
          <img className="blog" width="300" height="300" src={img} />
          <img className="blog" width="300" height="300" src={img2} />
          <img className="blog" width="300" height="300" src={img3} />
          <img className="blog" width="300" height="300" src={img4} />
          <img className="blog" width="300" height="300" src={img5} />
        </div>
        <p>
          Tempor ad nostrud ex esse cillum sit. Veniam cupidatat in tempor nisi
          laborum aute. Esse id esse culpa sunt commodo anim. Deserunt laboris
          aute ad ullamco amet nisi cillum sunt incididunt qui labore. Fugiat
          ipsum magna qui labore qui nostrud. Reprehenderit mollit in ipsum in
          est quis voluptate. Cupidatat excepteur et fugiat nisi laboris tempor
          reprehenderit dolore deserunt.Irure nulla amet aute nulla culpa
          voluptate aliquip et. Exercitation ea aliqua sunt nostrud voluptate
          nulla excepteur quis nisi. Excepteur excepteur occaecat dolor irure
          sit laboris consectetur elit officia eu. Cupidatat ut amet commodo
          elit ipsum excepteur cupidatat commodo consectetur minim. Veniam
          labore sunt excepteur exercitation exercitation laboris nisi. Velit
          elit cupidatat commodo quis sint aliqua amet proident id ut. Laborum
          laborum commodo voluptate occaecat ad nisi deserunt veniam velit amet
          duis. Do do et aliqua officia est cillum deserunt proident nisi
          eiusmod. Magna laborum mollit dolor sit nulla ea. Est aute officia
          labore irure cillum fugiat velit irure excepteur consectetur eu do.
          Officia reprehenderit in eiusmod deserunt reprehenderit sunt laborum
          quis culpa excepteur ipsum laborum qui. Irure aute ex officia ex
          tempor incididunt. Dolor laboris eiusmod excepteur tempor nostrud
          dolore do.
        </p>
      </>
    );
  }
}

export default Blog;
