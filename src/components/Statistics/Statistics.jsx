import { Item, List, Percentage } from './Statistics.styled';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
   return (
      <>
         <List>
            <Item key="good">Good<Percentage>{good}</Percentage></Item>
            <Item key="neutral">Neutral<Percentage>{neutral}</Percentage></Item>
            <Item key="bad">Bad<Percentage>{bad}</Percentage></Item>
            <Item key="total">Total<Percentage>{total}</Percentage></Item>
            <Item key="positivePercentage">Positive Percentage<Percentage>{positivePercentage}%</Percentage></Item>
         </List>
      </>

   )
}
