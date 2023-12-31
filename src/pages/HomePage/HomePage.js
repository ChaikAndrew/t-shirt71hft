import React, { useEffect, useState } from 'react';
import s from './Homepage.module.scss';
import { sizesParse } from '../../redux/sizes/sizes-operations';
import { colorsParse } from '../../redux/colors/colors-operations';
import { getColors } from '../../redux/colors/colors-selectors';
import { getSizes } from '../../redux/sizes/sizes-selectors';
import { useDispatch, useSelector } from 'react-redux';

import BackgroungImage from '../../images/photo-1523381210434-271e8be1f52b.avif';
import Logo from '../../images/hft.svg';
import Modal from 'react-modal';

Modal.setAppElement('#modal');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    border: 'none',
    borderRadius: '15px',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.7)',
  },
};

const HomePage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [searchedColors, setSearchedColors] = useState([]);

  const dispatch = useDispatch();

  const colors = useSelector(getColors);
  const sizes = useSelector(getSizes);

  useEffect(() => {
    dispatch(sizesParse());
    dispatch(colorsParse());
  }, [dispatch]);

  const handleSearchQuery = e => {
    setSearchValue(e.target.value);
    const query = e.target.value.trim().toLowerCase();

    if (query === '') {
      setSearchedColors([]);
      return;
    }

    const search = colors.filter(color => {
      return (
        (searchType === 'name' && color.name.toLowerCase().includes(query)) ||
        (searchType === 'number' && color.number.toLowerCase().includes(query))
      );
    });
    setSearchedColors(search);
  };

  const handleSearchType = e => {
    setSearchValue('');
    setSearchedColors([]);
    setSearchType(e.target.value);
  };

  function openModal(value) {
    setSelectedSize(value);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      className={s.HomePage}
      style={{
        backgroundImage: `linear-gradient(0.51turn, #1d12127c, #3d00191c), url(${BackgroungImage})`,
      }}
    >
      <section className={s.container}>
        <h1 className={s.title}>Your Helper</h1>
        <div className={s.logo}>
          <div className={s.rotating} tabIndex="0">
            <img src={Logo} width="20" height="20" alt="logo" />
          </div>
          <h2 className={s.subtitle}>
            HFT<span className={s.subtitleItemFirst}>7</span>
            <span className={s.subtitleItemSecond}>1</span>
          </h2>
        </div>
        <div className={s.dropdown}>
          <label htmlFor="searchType">Select search type:</label>
        </div>
        <div className={s.search}>
          <select
            value={searchType}
            className={s.searchType}
            id="searchType"
            onChange={handleSearchType}
          >
            <option value="name">By name</option>
            <option value="number">By number</option>
          </select>
          <input
            value={searchValue}
            onChange={handleSearchQuery}
            type="text"
            className={s.searchValue}
            id="searchValue"
          />
        </div>
        <div id="resultContainer" className={s.result}>
          {searchedColors.length !== 0 &&
            searchedColors.map(({ name, number }) => {
              return (
                <div className={s.searchResultContainer} key={number}>
                  Color: <span className={s.nameLight}>{name}</span>
                  Number: <span className={s.numberLight}>{number}</span>
                </div>
              );
            })}
        </div>
      </section>
      <section className={s.article}>
        <h3 className={s.article_subtitle}>Color, size and model finder</h3>
        <button
          onClick={() => openModal('standard_size')}
          className={s.showSizeTable}
          id="showSizeTable"
        >
          Standard sizes
        </button>
        <button
          onClick={() => openModal('childrens_size')}
          className={s.showSizeTable}
          id="showSizeTable2"
        >
          Children's sizes
        </button>
        <button
          onClick={() => openModal('babys_size')}
          className={s.showSizeTable}
          id="showSizeTable3"
        >
          Baby's sizes
        </button>
        <button
          onClick={() => openModal('fotl_size')}
          className={s.showSizeTable}
          id="showSizeTable4"
        >
          FotL sizes
        </button>
        <button
          onClick={() => openModal('fotl_size_bluzy')}
          className={s.showSizeTable}
          id="showSizeTable5"
        >
          FotL sizes bluzy
        </button>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <table>
          <tbody>
            <tr className={s.tableHead}>
              <th className={s.tableTitle}>Size (Marking)</th>
              <th className={s.tableTitle}>Number</th>
            </tr>
            {selectedSize &&
              sizes[selectedSize]?.length !== 0 &&
              [...sizes[selectedSize]]
                .sort((a, b) => a.sortId - b.sortId)
                .map(({ name, number }) => {
                  return (
                    <tr key={name} className={s.tableItem}>
                      <td>{name}</td>
                      <td>{number}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
        <button className={s.closeModal} onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default HomePage;
