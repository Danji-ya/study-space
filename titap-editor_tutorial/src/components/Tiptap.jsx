import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { SlashCommands } from "./SlashCommands";
import TiptapImage from "@tiptap/extension-image";
import classNames from "classnames";
import Placeholder from "@tiptap/extension-placeholder";

function uploadImage(file) {
  const data = new FormData();
  data.append("file", file);

  /*
    upload API 요청
  */
  // return axios.post('/upload', data);
}

function CommandList(props) {
  const { items, selectItem, selectedIndex } = props;

  return (
    <ul className="commands-list-container">
      <header>Add field</header>
      {items.map(({ title, icon }, idx) => {
        return (
          <li
            className={classNames("commands-list-item", {
              active: selectedIndex === idx,
            })}
            key={idx}
            tabIndex={idx}
            onClick={() => selectItem(idx)}
          >
            {title}
          </li>
        );
      })}
    </ul>
  );
}

export default function Tiptap(props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TiptapImage,
      Placeholder.configure({
        placeholder: `Type / to add something`,
      }),
      SlashCommands.configure({
        commands: [
          {
            id: 0,
            icon: "h1",
            title: "Heading 1",
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode("heading", { level: 1 })

                .run();
            },
          },
          {
            id: 1,
            icon: "h2",
            title: "Heading 2",
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode("heading", { level: 2 })

                .run();
            },
          },
          {
            id: 2,
            icon: "h3",
            title: "Heading 3",
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode("heading", { level: 3 })
                .run();
            },
          },
          {
            id: 3,
            icon: "h4",
            title: "Heading 4",
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode("heading", { level: 4 })
                .run();
            },
          },
          {
            id: 4,
            icon: "h5",
            title: "Heading 5",
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode("heading", { level: 5 })
                .run();
            },
          },
          {
            id: 5,
            icon: "h6",
            title: "Heading 6",
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode("heading", { level: 6 })
                .run();
            },
          },
          {
            id: 6,
            icon: "Bullet",
            title: "Bulleted list",
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .toggleBulletList()
                .run();
            },
          },
          {
            id: 7,
            icon: "Numbered",
            title: "Numbered list",
            command: ({ editor, range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .toggleOrderedList()
                .run();
            },
          },
          {
            id: 8,
            icon: "Preformated",
            title: "Preformated",
            command: ({ editor, range }) => {
              editor.chain().focus().deleteRange(range).toggleCodeBlock().run();
            },
          },
        ],
        component: CommandList,
      }),
    ],
    content: props.value,
    editorProps: {
      handleDrop: function (view, event, slice, moved) {
        if (
          !moved &&
          event.dataTransfer &&
          event.dataTransfer.files &&
          event.dataTransfer.files[0]
        ) {
          // if dropping external files
          let file = event.dataTransfer.files[0]; // the dropped file
          let filesize = (file.size / 1024 / 1024).toFixed(4); // get the filesize in MB

          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const url = reader.result;
            const { schema } = view.state;
            const node = schema.nodes.image.create({ src: url });
            const transaction = view.state.tr.replaceSelectionWith(node);
            view.dispatch(transaction);
          };

          if (
            (file.type === "image/jpeg" || file.type === "image/png") &&
            filesize < 10
          ) {
            // check valid image type under 10MB
            // check the dimensions
            let _URL = window.URL || window.webkitURL;
            let img = new Image(); /* global Image */
            img.src = _URL.createObjectURL(file);
            img.onload = function () {
              if (this.width > 5000 || this.height > 5000) {
                window.alert(
                  "Your images need to be less than 5000 pixels in height and width."
                ); // display alert
              } else {
                // valid image so upload to server
                // uploadImage will be your function to upload the image to the server or s3 bucket somewhere
                // uploadImage(file).then(function(response) { // response is the image url for where it has been saved
                //   // pre-load the image before responding so loading indicators can stay
                //   // and swaps out smoothly when image is ready
                //   let image = new Image();
                //   image.src = response;
                //   image.onload = function() {
                //     // place the now uploaded image in the editor where it was dropped
                //     const { schema } = view.state;
                //     const coordinates = view.posAtCoords({ left: event.clientX, top: event.clientY });
                //     const node = schema.nodes.image.create({ src: response }); // creates the image element
                //     const transaction = view.state.tr.insert(coordinates.pos, node); // places it in the correct position
                //     return view.dispatch(transaction);
                //   }
                // }).catch(function(error) {
                //   if (error) {
                //     window.alert("There was a problem uploading your image, please try again.");
                //   }
                // });
              }
            };
          } else {
            window.alert(
              "Images need to be in jpg or png format and less than 10mb in size."
            );
          }
          return true; // handled
        }
        return false; // not handled use default behaviour
      },
    },
    onUpdate({ editor }) {
      props.onTextUpdate({
        html: editor.getHTML(),
        text: editor.getText(),
        name: props.name,
      });
    },
  });

  return (
    <div className="richtext-container">
      {editor && (
        <EditorContent label={props.label} editor={editor}></EditorContent>
      )}
    </div>
  );
}
