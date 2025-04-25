"use client";

import { 
  Clock24Regular,
  CalendarClock24Regular,
  Bed24Regular,
  Info24Regular,
  PeopleTeam24Regular,
  AnimalCat24Regular
} from "@fluentui/react-icons";
import { SectionHeader } from "../common/SectionHeader";

interface RuleItemProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const RuleItem: React.FC<RuleItemProps> = ({ icon, title, items }) => (
  <div>
    <SectionHeader 
      icon={icon}
      title={title}
      className="text-gray-600"
    />
    <ul className="space-y-2 text-gray-600">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export const RulesSection: React.FC = () => {
  const rules = [
    {
      icon: <Clock24Regular className="w-5 h-5 text-gray-600" />,
      title: "Check-in",
      items: ["From 15:00"]
    },
    {
      icon: <Clock24Regular className="w-5 h-5 text-gray-600" />,
      title: "Check-out",
      items: ["Until 11:00"]
    },
    {
      icon: <CalendarClock24Regular className="w-5 h-5 text-gray-600" />,
      title: "Cancellation/ prepayment",
      items: ["Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection."]
    },
    {
      icon: <Bed24Regular className="w-5 h-5 text-gray-600" />,
      title: "Children and beds",
      items: [
        "Children of any age are welcome.",
        "Children 4 years and above will be charged as adults at this property.",
        "To see correct prices and occupancy information, please add the number of children in your group and their ages to your search."
      ]
    },
    {
      icon: <Info24Regular className="w-5 h-5 text-gray-600" />,
      title: "Age restriction",
      items: ["The minimum age for check-in is 18"]
    },
    {
      icon: <PeopleTeam24Regular className="w-5 h-5 text-gray-600" />,
      title: "Groups",
      items: ["When booking more than 9 rooms, different policies and additional supplements may apply."]
    },
    {
      icon: <AnimalCat24Regular className="w-5 h-5 text-gray-600" />,
      title: "Pets",
      items: ["Pets are not allowed."]
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-x-6">
      {rules.map((rule, index) => (
        <div key={index} className="space-y-8">
          <RuleItem {...rule} />
        </div>
      ))}
    </div>
  );
}; 