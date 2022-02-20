import React from "react";
import { Link } from "react-router-dom";

import MainBlogCard from "../../shared/components/UIElements/MainBlogCard";
import MiddleBlogCards from "../../shared/components/UIElements/MiddleBlogCards";
import SideBlog from "../../shared/components/UIElements/SideBlog";
import MainNavigation from "../../shared/components/Navigation/MainNavigation";

import "./Blog.css";

const Blog = () => {
  // write
  // rea

  const items = [
    {
      title: "Is it really wrong to use a fork instead of ChopSticks?",
      paragraph:
        "The answer is yes. Especially when you are in a michelin star restaurant and happen to be traveling with the most beautiful food critic in Japan.",
    },
    {
      title: "Japan's Lost Temple",
      paragraph:
        "To start this off let me tell you about how I thought I was an international Indiana Jones.",
    },
    {
      title: "Was the Wagyu Worth it?",
      paragraph:
        "I don't want to make it seem as if I traveled to Japan to taste some top of the line Wagyu beef, but I don't believe in lying.",
    },
    {
      title: "The story of how I turned into an Anime Weeb..",
      paragraph:
        "This strange spiral towards a marathon of violent cartoons and an unhealthy representation of japanese women started off more innocent than it ended.",
    },
  ];

  return (
    <React.Fragment>
      <section className="blog_main">
        <MainNavigation />
        <section className="split_three fade-in-left">
          <div className="main_blog_card">
            <div id="main_blog_card--wrap">
              <h1>The Peaceful Life of a Japanese Citizen</h1>
              <h2>
                Have you ever wondered what gives your Japanese friend their
                glow?
              </h2>
              <Link to="/blog" className="btn-med fade-in-bottom">
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="split_four">
          <div id="blog_post_container">
            <aside className="slide-in-bottom" id="blog_card_1">
              <MainBlogCard
                title={items[0].title}
                paragraph={items[0].paragraph}
              />
            </aside>
            <aside className="slide-in-bottom" id="blog_card_2">
              <MiddleBlogCards
                title={items[1].title}
                paragraph={items[1].paragraph}
              />
            </aside>
            <aside className="slide-in-bottom" id="blog_card_3">
              <MiddleBlogCards
                title={items[2].title}
                paragraph={items[2].paragraph}
              />
            </aside>
            <aside className="slide-in-bottom" id="blog_card_4">
              <MainBlogCard
                title={items[3].title}
                paragraph={items[3].paragraph}
              />
            </aside>
          </div>
          <aside id="sideBar">
            <SideBlog />
          </aside>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Blog;
