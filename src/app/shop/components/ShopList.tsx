"use client";
import { Avatar, List } from "antd";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: "1",
    title: "Ant Design Title 1",
  },
  {
    id: "2",
    title: "Ant Design Title 2",
  },
  {
    id: "3",
    title: "Ant Design Title 3",
  },
  {
    id: "4",
    title: "Ant Design Title 4",
  },
];
export default function ShopList() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={<Link href={"shop/" + item.id}>{item.title}</Link>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  );
}
