import React from "react";
import "./Home.css";
export function Home() {
  const blogPosts = [
    {
      title:
        "Attend Your Local Orchid Society Meeting for Tons of Great Information",
      description:
        "Learn about the benefits of attending local orchid society meetings and the wealth of information they provide.",
      image: "https://live.staticflickr.com/1486/25710684284_d1e3207221_b.jpg",
    },
    {
      title:
        "Underplanting. Can It Be Done With Houseplants and What Plants are Best?",
      description:
        "Discover the concept of underplanting with houseplants and the best plant choices for adding interest to large planters.",
      image: "https://live.staticflickr.com/2635/4037410109_9964bdc8a7_b.jpg",
    },
    {
      title:
        "Fern Fronds Have Spores on their Undersides. What Is Their Purpose?",
      description:
        "Explore the spores found on the undersides of fern fronds and their role, often mistaken for scale insects.",
      image:
        "https://c8.alamy.com/comp/2D38AKT/nasturtium-leaves-of-different-green-tones-natural-plant-background-2D38AKT.jpg",
    },
    {
      title:
        "Why is Your Orchid Leaf Wrinkled and Pleated and Can It Be Fixed?",
      description:
        "Find out the reasons behind wrinkled and pleated orchid leaves and whether it can be remedied.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKla_5HDGeFptiJL_bIcBwb906SIB4d2-jA",
    },
    {
      title:
        "The Pollen Sacs are Missing on My African Violet Flowers. What Happened?",
      description:
        "Learn about the absence of pollen sacs on African violet flowers and why it's a positive development.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZk5G0Ayf_5O_olT-hoEXBfN6Sfyjxv9lNHA&usqp=CAU",
    },
    {
      title:
        "What Plant Leaves Are Telling You About How To Care for The Plant",
      description:
        "Discover how plant leaves communicate their care needs and how to interpret their signals.",
      image:
        "https://m.media-amazon.com/images/I/5150sp+qWUL._AC_UF1000,1000_QL80_.jpg",
    },
  ];
  return (
    <>
      <div id="banner">
        <div>
          <h1>Grow your green thumb.</h1>
          <p>
            What’s the best way to nurture your green thumb when you don’t have
            a yard or space? Houseplants! This is your guide to raising the
            best, healthiest, and happiest potted plants nature has ever seen.
          </p>
        </div>
        <img
          src="https://www.epicgardening.com/wp-content/uploads/2023/06/home-banner.jpg"
          alt=""
        />
      </div>
      <div id="mid">
        <div>
          <h2>Grow beautiful houseplants!</h2>
          <p>
            The GardenEase is all about helping you find success in growing
            beautiful, thriving houseplants.
          </p>
        </div>
        <section>
          <div>
            <img
              src="https://thehouseplantguru.com//wp-content/uploads/2019/04/plant-1.png"
              alt=""
            />
            <h3>Healthy, thriving houseplants</h3>
            <p>
              Learn about your favorite houseplants: Do you need fertilizer? How
              much should you water them? Is the plant failing? Is it beyond
              help? Find the answers to these questions and more!
            </p>
          </div>
          <div>
            <img
              src="https://thehouseplantguru.com//wp-content/uploads/2019/04/watering-can.png"
              alt=""
            />
            <h3>Practical tips & tools</h3>
            <p>
              We’ll talk about my absolute favorite tips & tools! From being
              able to tell when plants really need water, to selecting the best
              plants for the light in your home, you’ll leave my blog with the
              knowledge you need to succeed with your houseplants.
            </p>
          </div>
          <div>
            <img
              src="https://thehouseplantguru.com//wp-content/uploads/2019/04/leaf.png"
              alt=""
            />
            <h3>Dispell common myths!</h3>
            <p>
              You can’t believe everything you read on the internet! Should I
              use mayonnaise to shine my plants’ leaves? Do I need pebbles at
              the bottom of my pots for drainage? Can I get the leaves of my
              African violet wet? We’ll solve every mystery together!
            </p>
          </div>
        </section>
      </div>
      <div id="end">
        <h2>Articles and Blog</h2>
        <div>
          {blogPosts.map((e) => (
            <div>
              <img src={e.image} alt={e.title} />
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
