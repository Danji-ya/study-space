import React from "react";
import { Extension } from "@tiptap/core";
import Suggestion from "@tiptap/suggestion";
import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";

export const SlashCommands = Extension.create({
  name: "slash-command",

  addOptions: {
    commands: [],
    filterCommands: (commands) => {
      return commands;
    },
    component: null,
    suggestion: {
      decorationTag: "span",
      char: "/",
      startOfLine: false,
    },
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
        items: ({ query }) => {
          return this.options.commands.filter(
            (item) =>
              item.title.toLowerCase().search(query.toLowerCase().trim()) !== -1
          );
        },
        command: ({ editor, range, props }) => {
          props.command({ editor, range });
        },
        render: () => {
          let component;
          let popup;

          return {
            onStart: (props) => {
              component = new ReactRenderer(CommandsListController, {
                editor: props.editor,
                props: { ...props, component: this.options.component },
              });

              popup = tippy("body", {
                getReferenceClientRect: props.clientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: "manual",
                placement: "top-start",
              });
            },
            onUpdate: (props) => {
              component.updateProps({
                ...props,
                component: this.options.component,
              });

              popup[0].setProps({
                getReferenceClientRect: props.clientRect,
              });
            },
            onKeyDown(props) {
              return component.ref?.onKeyDown(props);
            },
            onExit() {
              popup[0].destroy();
              component.destroy();
            },
          };
        },
      }),
    ];
  },
});

class CommandsListController extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  onKeyDown({ event }) {
    if (event.key === "ArrowUp") {
      this.upHandler();
      return true;
    }

    if (event.key === "ArrowDown") {
      this.downHandler();
      return true;
    }

    if (event.key === "Enter") {
      this.enterHandler();
      return true;
    }

    return false;
  }

  upHandler() {
    this.setState({
      selectedIndex:
        (this.state.selectedIndex + this.props.items.length - 1) %
        this.props.items.length,
    });
  }

  downHandler() {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.items.length,
    });
  }

  enterHandler() {
    this.selectItem(this.state.selectedIndex);
  }

  selectItem(index) {
    const item = this.props.items[index];

    if (item) {
      this.props.command(item);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.items.length !== this.props.items.length) {
      this.setState({ selectedIndex: 0 });
    }
  }

  render() {
    const { items, component: Component } = this.props;
    const { selectedIndex } = this.state;

    return (
      <Component
        items={items}
        selectedIndex={selectedIndex}
        selectItem={this.selectItem}
      />
    );
  }
}
