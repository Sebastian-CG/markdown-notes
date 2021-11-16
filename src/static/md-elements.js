const MarkDownElements = [
  { content: "Title H1", markDown: "# Title H1" },
  { content: "Title H2", markDown: "## Title H2" },
  { content: "Title H3", markDown: "### Title H3" },
  { content: "Title H4", markDown: "#### Title H4" },
  { content: "Title H5", markDown: "##### Title H5" },
  { content: "Title H6", markDown: "###### Title H6" },
  {
    content: "Paragraph",
    markDown:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim nisi, venenatis non finibus vel, elementum ac tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pulvinar lectus, sit amet laoreet orci tincidunt sit amet. Sed mi est, sollicitudin at sapien ut, scelerisque maximus leo. Integer sed ornare ante, vel faucibus mauris. Ut bibendum pharetra mauris, sed cursus ex iaculis vitae. Vestibulum dolor sem, ullamcorper non ex at, pulvinar tempor ipsum. Nulla non facilisis nisl, ac eleifend felis.",
  },
  {
    content: "Bold",
    markDown: "**Bold**",
  },
  {
    content: "Italic",
    markDown: "*Italic*",
  },
  {
    content: "Bold & Italic",
    markDown: "***Bold & Italic***",
  },
  {
    content: "List",
    markDown: "- Awesome Readme Templates\n- Awesome README\n- How to write a Good readme",
  },
  {
    content: "Link",
    markDown: "[Documentation](https://linktodocumentation)",
  },
  {
    content: "Code",
    markDown: "```bash\n$ sudo apt update\n```",
  },
  {
    content: "Blockquote",
    markDown:
      "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in sagittis eros. Quisque id condimentum quam. Ut mollis neque leo, et luctus ante sollicitudin quis. Vestibulum quis dolor eget nisl tristique efficitur. Integer vitae dapibus tellus. In neque leo, fermentum vitae dapibus at, vehicula quis tortor. Pellentesque vehicula dapibus purus et egestas.",
  },
  {
    content: "Image",
    markDown:
      "![alternative text](https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png)",
  },
  {
    content: "Table 1",
    markDown:
      "| Color         | Hex                                                              |\n| ------------- | ---------------------------------------------------------------- |\n| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |\n| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |\n| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |\n| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |",
  },
  {
    content: "Table 2",
    markDown:
      "| Parameter | Type     | Description                       |\n| :-------- | :------- | :-------------------------------- |\n| `id`      | `string` | **Required**. Id of item to fetch |",
  },
];

export default MarkDownElements;
