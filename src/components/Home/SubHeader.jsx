const SubHeader = () => {

    return (
      <div className="sub-header">
        <div className="left">Title</div>

        <div className="right">
          <div className="searchbar">
            <input type="text" placeholder="Search" />
            <i className="bx bx-search"></i>
          </div>

          <i className="bx bx-filter-alt"></i>
          <i className="bx bx-sort-down"></i>
        </div>
      </div>
    );
}

export default SubHeader;