import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
  Paper,
  Typography,
  IconButton,
  PaginationItem,
} from '@mui/material';

import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { UseAllAlertSlice } from './slice/index';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllAlerts,
  selectError,
  selectLoading,
  selectTotalAlerts,
} from './slice/selectors';
import { selectLoading as selectCreateAlertLoading } from '../CreateAlert/slice/selectors';
import Loader from 'components/Loader';
import { UseCreateAlertSlice } from '../CreateAlert/slice/index';
import { Link, useLocation } from 'react-router-dom';
import { UseLoginSlice } from 'pages/Login/slice/index';

const headCells = [
  {
    id: 'name',
    align: 'center',
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'priceSignal',
    align: 'center',
    disablePadding: false,
    label: 'Price Signal',
  },
  {
    id: 'criteria',
    align: 'center',
    disablePadding: false,
    label: 'Criteria',
  },
  {
    id: 'value',
    align: 'center',
    disablePadding: false,
    label: 'Value',
  },
  {
    id: 'email',
    align: 'center',
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'alertDays',
    align: 'center',
    disablePadding: false,
    label: 'Active Days',
  },
  {
    id: 'actions',
    align: 'center',
    disablePadding: false,
    label: 'Actions',
  },
];

function AlertTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sx={{
              fontSize: 14,
              fontWeight: 'bold',
              py: 2,
            }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

AlertTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
};

export default function AlertTable() {
  const { actions: LoginActions } = UseLoginSlice();

  const { actions } = UseAllAlertSlice();
  const location = useLocation();
  UseCreateAlertSlice();
  const dispatch = useDispatch();
  const [order] = useState('asc');
  const [orderBy] = useState('trackingNo');
  const [pageNum] = useState(1);
  const allAlerts = useSelector(selectAllAlerts);
  const loading = useSelector(selectLoading);
  const totalAlerts = useSelector(selectTotalAlerts);
  const loadingCreateAlert = useSelector(selectCreateAlertLoading);
  const fetchAlertError = useSelector(selectError);
  useEffect(() => {
    var pageNumber = parseInt(location.search.split('=')[1])
      ? parseInt(location.search.split('=')[1])
      : 1;
    dispatch(actions.fetch({ pageNum: pageNumber }));

    if (fetchAlertError.includes('Invalid token')) {
      dispatch(LoginActions.logout());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingCreateAlert, location.search]);

  return (
    <Box>
      {loading ? (
        <Loader />
      ) : allAlerts && allAlerts.length === 0 ? (
        <Typography variant='h3' component='h3' sx={{ my: 7 }}>
          No Alerts Saved
        </Typography>
      ) : (
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 0',
            }}
          >
            <Box sx={{ m: '0 1rem', display: 'flex' }}>
              <Button variant='contained' sx={{ marginRight: '1rem' }}>
                Alerts
              </Button>
              <Button variant='outlined'>Triggered Alerts</Button>
            </Box>
            <IconButton onClick={() => dispatch(actions.fetch({ pageNum: 1 }))}>
              <ReplayIcon />
            </IconButton>
          </Box>
          <TableContainer
            sx={{
              width: `100%`,
              overflowX: 'auto',
              '& td ': { whiteSpace: 'nowrap' },
            }}
            component={Paper}
          >
            <Table
              aria-labelledby='tableTitle'
              size='small'
              sx={{
                '& .MuiTableCell-root:first-of-type': {
                  pl: 2,
                },
                '& .MuiTableCell-root:last-child': {
                  pr: 3,
                },
              }}
            >
              <AlertTableHead order={order} orderBy={orderBy} />
              <TableBody>
                {allAlerts.map((row, index) => {
                  return (
                    <TableRow
                      hover
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                      tabIndex={-1}
                      key={index}
                    >
                      {Object.entries(row).map((keyValue) => {
                        if (
                          keyValue[0] === 'name' ||
                          keyValue[0] === 'priceSignal' ||
                          keyValue[0] === 'criteria' ||
                          keyValue[0] === 'value' ||
                          keyValue[0] === 'email'
                        )
                          return (
                            <TableCell
                              key={keyValue[0]}
                              align='center'
                              sx={{
                                fontSize: 14,
                                py: 0,
                              }}
                            >
                              {keyValue[1]}
                            </TableCell>
                          );
                        if (keyValue[0] === 'alertDays')
                          return (
                            <TableCell
                              key={keyValue[0]}
                              align='center'
                              sx={{
                                fontSize: 14,
                                py: 0,
                              }}
                            >
                              {keyValue[1]
                                .map((itm) => itm.split('day')[0])
                                .join(',')}
                            </TableCell>
                          );
                        if (keyValue[0] === 'phone')
                          return (
                            <TableCell
                              key={keyValue[0]}
                              align='center'
                              sx={{ py: 0 }}
                            >
                              <IconButton>
                                <CreateOutlinedIcon />
                              </IconButton>
                              <IconButton
                                onClick={() =>
                                  dispatch(
                                    actions.delete({ id: row._id, pageNum })
                                  )
                                }
                              >
                                <DeleteOutlinedIcon />
                              </IconButton>
                            </TableCell>
                          );
                        return (
                          <TableCell
                            key={keyValue[0]}
                            sx={{ display: 'none' }}
                          ></TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <Box sx={{ margin: '1.45rem ' }}>
              <Pagination
                count={Math.ceil(totalAlerts / 10)}
                variant='outlined'
                shape='rounded'
                sx={{ display: 'flex', justifyContent: 'end' }}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={item.page === 1 ? '' : `?page=${item.page}`}
                    {...item}
                  />
                )}
              />
            </Box>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
}
