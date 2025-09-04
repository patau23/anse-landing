import type { ReactNode } from 'react';
import SectionBadge from './section-badge';
import SectionDescription from './section-description';
import SectionTitle from './section-title';

export interface SectionHigaProps {
  badgeText?: string;
  title?: string | ReactNode;
  description?: string;
}
const SectionHiga = (props: SectionHigaProps) => {
  const { badgeText, description, title } = props;
  return (
    <div className="z-10 flex flex-col items-center gap-2 self-stretch">
      {badgeText && <SectionBadge text={badgeText} />}
      {title && <SectionTitle text={title} />}
      {description && <SectionDescription text={description} />}
    </div>
  );
};
export default SectionHiga;
