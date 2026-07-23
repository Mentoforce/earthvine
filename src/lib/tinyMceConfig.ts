export const serviceTinyMCEConfig = {
  height: 500,

  menubar: true,

  branding: false,

  statusbar: false,

  plugins: [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "table",
    "media",
    "searchreplace",
    "code",
    "fullscreen",
    "preview",
    "wordcount",
    "visualblocks",
    "anchor",
  ],

  toolbar:
    "undo redo | " +
    "blocks | " +
    "bold italic underline | " +
    "alignleft aligncenter alignright alignjustify | " +
    "bullist numlist | " +
    "link image table | " +
    "removeformat | " +
    "code fullscreen preview",

  forced_root_block: "p",

  remove_trailing_brs: true,

  entity_encoding: "raw",

  content_style: `
      body{
        font-family:Raleway,sans-serif;
        font-size:17px;
        line-height:1.75;
        color:#444;
        padding:20px;
      }

      h1,h2,h3,h4,h5,h6{
        font-family:Playfair Display,serif;
        color:#222;
        margin-top:1.5em;
        margin-bottom:.6em;
      }

      p{
        margin:0 0 1em;
      }

      ul,ol{
        margin:1em 0;
        padding-left:1.5rem;
      }

      li{
        margin:.35em 0;
      }
  `,
};
