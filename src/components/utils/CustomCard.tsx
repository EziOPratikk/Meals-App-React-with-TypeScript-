import { type ReactNode } from 'react';

import classes from './CustomCard.module.css';

interface CustomCardProps {
  children: ReactNode;
}

function CustomCard(props: CustomCardProps) {
  return <div className={classes.card}>{props.children}</div>;
}

export default CustomCard;
