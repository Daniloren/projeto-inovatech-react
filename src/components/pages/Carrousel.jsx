import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

var items = [
  {
    src: "https://besthqwallpapers.com/Uploads/17-2-2020/121822/thumb2-python-glitter-logo-programming-language-grid-metal-background-python-creative.jpg",
    altText: "Python é uma linguagem de programação",
    caption: "Python é uma linguagem de programação",
    align: "center",
    link: "/curso/python",
  },
  {
    src: "https://besthqwallpapers.com/Uploads/20-2-2020/122463/thumb2-html5-glitter-logo-programming-language-grid-metal-background-html5-creative.jpg",
    altText:
      "HTML é uma linguagem de marcação utilizada na construção de páginas na Web",
    caption:
      "HTML é uma linguagem de marcação utilizada na construção de páginas na Web",
    align: "left",
    link: "/curso/html",
  },
  {
    src: "https://besthqwallpapers.com/Uploads/21-2-2020/122701/thumb2-c-plus-plus-glitter-logo-programming-language-grid-metal-background-c-plus-plus-creative.jpg",
    altText: " C# é uma linguagem de programação, multiparadigma",
    caption: " C# é uma linguagem de programação, multiparadigma",
    align: "right",
    link: "/curso/c-sharp",
  },
];

class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, items: [] };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }
  componentDidMount() {
    this.setState({ items: items });

    // await fetch("/ads")
    //   .then((response) => { response.json(); })
    //   .then((ads) => { this.setState({ items: ads }); })
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.state.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex, items } = this.state;

    console.log(items);

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            className={"text-" + item.align}
            captionText={""}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={this.state.items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Carrousel;
