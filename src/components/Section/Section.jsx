import { Wraper } from './Section.styled';

export const Section = ({ title, children }) => {
   return (
      <Wraper>
         {title && <h2>{title}</h2>}
         {children}
      </Wraper>
   );
};