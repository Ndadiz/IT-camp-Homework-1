import React from 'react'
import classes from "./ServerStatus.module.css"

type ServerStatusProps = {
  className: string;
  children: React.ReactNode; 
};
export default function ServerStatus({children, className} : ServerStatusProps,) {
  return (
    <div className={classes.ServerStatus}>
      <div className={classes[className]}>{children}</div>
    </div>
  )
}
