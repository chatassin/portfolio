import { type ReactNode } from "react";

type CVEntryProps = {
  title: string;
  employer: string;
  date: string;
  children?: ReactNode;
};

export default function CVEntry(props: CVEntryProps) {
  return (
    <div className="mb-6 border-l-2 pl-4 border-blue-600">
      <h3 className="text-xl font-bold mb-1">
        {props.title}
        <span className="text-blue-600 font-light mx-2">
          @ {props.employer}
        </span>
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {props.date}
      </p>

      <div className="text-gray-700 dark:text-gray-300 space-y-2">
        {props.children}
      </div>
    </div>
  );
}
