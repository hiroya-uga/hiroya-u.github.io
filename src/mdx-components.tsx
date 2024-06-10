import { CodeBlock } from '@/components/CodeBlock';

import React, { Children, HTMLAttributes, ReactNode } from 'react';

import type { MDXComponents } from 'mdx/types';

type TagName = keyof JSX.IntrinsicElements;
type Props = Pick<HTMLAttributes<HTMLHeadingElement>, 'children'>;

interface DynamicTagProps {
  tagName: TagName;
  children?: ReactNode;
  [key: string]: any;
}

const DynamicTagComponent: React.FC<DynamicTagProps> = ({ tagName, children, ...props }) => {
  return React.createElement(tagName, props, children);
};

const headingLevel = (tagName: TagName) => {
  const Heading = ({ children }: Props) => {
    const getId = (reactNode: ReactNode) => {
      let value = '';

      Children.forEach(reactNode, (child) => {
        if (typeof child === 'string') {
          value += child;
        } else if (React.isValidElement(child)) {
          value += getId(child.props.children);
        }
      });
      return value;
    };
    const id = getId(children).replace(/[^\t\n\f\r\x20-\x7E\u00A0-\uD7FF\uE000-\uFFFD\uD800-\uDBFF\uDC00-\uDFFF]/g, '');

    return (
      <DynamicTagComponent tagName={tagName} id={id}>
        <strong>{children}</strong>
        <a href={`#${id}`} className="anchor">
          <span>Anchor Link</span>
        </a>
      </DynamicTagComponent>
    );
  };

  return Heading;
};

export const DocumentHeadingLevel2 = headingLevel('h2');

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: DocumentHeadingLevel2,
    h3: headingLevel('h3'),
    h4: headingLevel('h4'),
    h5: headingLevel('h5'),
    h6: headingLevel('h6'),
    pre: ({ children, className }) => {
      const getCode = (codeBlock: ReactNode) => {
        let codes = '';

        Children.forEach(codeBlock, (child) => {
          if (typeof child === 'string') {
            codes += child;
          } else if (React.isValidElement(child)) {
            codes += getCode(child.props.children);
          }
        });
        return codes;
      };

      return (
        <pre>
          <CodeBlock code={String(getCode(children))} className={className} />
        </pre>
      );
    },
    ...components,
  };
}
