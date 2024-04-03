import React, {FC} from 'react'
import {
  Layout,
  PageBlock,
  Input,
  Toggle,
  // Button,
  FloatingActionBar
} from 'vtex.styleguide'
// import Button from '@material-ui/core/Button';
// import "./myFile.css";

const style = {
  container: {
    margin: "10px",
  },
  wrapper: {
    display: "flex",
    "flex-wrap": "nowrap",
    "justify-content": "space-between",
    // border: "1px solid red",
    "align-items": "center"
  },
  box: {
    // display: "flex-item",
    // border: "1px solid blue",
    flex: 1,
    // "text-align": "center"
  },
  smallButton: {
    width: "200px"
  }
};

const AdminExample: FC = () => {
  return (
    <Layout>
      <PageBlock title="Order Operator Settings"
                 subtitle="Spam orders to fill out the dashboard"
                 variation="full">
        <div style={style.wrapper}>
          <div style={style.box}>
            <h1>Enter your settings</h1>
          </div>
          <div style={style.box}>
            <Toggle label="Activated" size="large" />

          </div>
        </div>

        <div className="mb5">
          <Input className="pb2 mw9" style={style.smallButton} label="Account"/>
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Email Prefix" placeholder="e.g. your.name"/>
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Api Key"/>
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Token"/>
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Shipping Price" placeholder="in pennies e.g. 500"/>
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Shipping SLA Name" placeholder="e.g. Standard Delivery"/>
        </div>
        <div className="mb5">
          <Input style={style.smallButton} label="Orders Per Hour" placeholder="e.g. 20"/>
        </div>

      </PageBlock>

      {/*<Button></Button>*/}


      <FloatingActionBar
        save={{
          label: 'save',
        }}
        cancel={{
          label: 'cancel',
        }}
      />
    </Layout>
  )
}

export default AdminExample
