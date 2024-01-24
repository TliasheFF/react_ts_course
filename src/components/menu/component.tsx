import { TMenu } from "../../constants/mocks-interface";

interface Props {
  menu: TMenu;
}

export const Menu = ({ menu }: Props) => {
  return (
    <>
      <h3>Меню:</h3>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};
