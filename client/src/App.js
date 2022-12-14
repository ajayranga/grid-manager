// project import
import Routes from 'routes';
import ThemeCustomization from 'styles';
import ScrollTop from 'components/ScrollTop';
import { UseMenuSlice } from 'store/menu';

const App = () => {
  UseMenuSlice();
  return (
    <ThemeCustomization>
      <ScrollTop>
        <Routes />
      </ScrollTop>
    </ThemeCustomization>
  );
};

export default App;
