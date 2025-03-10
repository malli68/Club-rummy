import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                   <header id="page-topbar">
              <div className="navbar-header">
                <div className="container-fluid">
                  <div className="float-right">
                    <div className="dropdown d-inline-block d-lg-none ml-2">
                      <button
                        type="button"
                        className="btn header-item noti-icon waves-effect"
                        id="page-header-search-dropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-magnify"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                        aria-labelledby="page-header-search-dropdown"
                      >
                        <form className="p-3">
                          <div className="form-group m-0">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search ..."
                                aria-label="Recipient's username"
                              />
                              <div className="input-group-append">
                                <button className="btn btn-primary" type="submit">
                                  <i className="mdi mdi-magnify"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="dropdown d-none d-lg-inline-block ml-1">
                      <button
                        type="button"
                        className="btn header-item noti-icon waves-effect"
                        data-toggle="fullscreen"
                      >
                        <i className="mdi mdi-fullscreen"></i>
                      </button>
                    </div>

                    <div className="dropdown d-inline-block">
                      <button
                        type="button"
                        className="btn header-item noti-icon waves-effect"
                        id="page-header-notifications-dropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-bell-outline"></i>
                        <span className="badge badge-danger badge-pill">3</span>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                        aria-labelledby="page-header-notifications-dropdown"
                      >
                        <div className="p-3">
                          <div className="row align-items-center">
                            <div className="col">
                              <h6 className="m-0"> Notifications </h6>
                            </div>
                            <div className="col-auto">
                              <a href="#!" className="small">
                                {" "}
                                View All
                              </a>
                            </div>
                          </div>
                        </div>
                        <div data-simplebar style={{ maxHeight: "230px" }}>
                          <a href="" className="text-reset notification-item">
                            <div className="media">
                              <div className="avatar-xs mr-3">
                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                  <i className="bx bx-cart"></i>
                                </span>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mb-1">Your order is placed</h6>
                                <div className="font-size-12 text-muted">
                                  <p className="mb-1">
                                    If several languages coalesce the grammar
                                  </p>
                                  <p className="mb-0">
                                    <i className="mdi mdi-clock-outline"></i> 3 min
                                    ago
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a href="" className="text-reset notification-item">
                            <div className="media">
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                className="mr-3 rounded-circle avatar-xs"
                                alt="user-pic"
                              />
                              <div className="media-body">
                                <h6 className="mt-0 mb-1">James Lemire</h6>
                                <div className="font-size-12 text-muted">
                                  <p className="mb-1">
                                    It will seem like simplified English.
                                  </p>
                                  <p className="mb-0">
                                    <i className="mdi mdi-clock-outline"></i> 1
                                    hours ago
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a href="" className="text-reset notification-item">
                            <div className="media">
                              <div className="avatar-xs mr-3">
                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                  <i className="bx bx-badge-check"></i>
                                </span>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 mb-1">Your item is shipped</h6>
                                <div className="font-size-12 text-muted">
                                  <p className="mb-1">
                                    If several languages coalesce the grammar
                                  </p>
                                  <p className="mb-0">
                                    <i className="mdi mdi-clock-outline"></i> 3 min
                                    ago
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>

                          <a href="" className="text-reset notification-item">
                            <div className="media">
                              <img
                                src="assets/images/users/avatar-4.jpg"
                                className="mr-3 rounded-circle avatar-xs"
                                alt="user-pic"
                              />
                              <div className="media-body">
                                <h6 className="mt-0 mb-1">Salena Layfield</h6>
                                <div className="font-size-12 text-muted">
                                  <p className="mb-1">
                                    As a skeptical Cambridge friend of mine
                                    occidental.
                                  </p>
                                  <p className="mb-0">
                                    <i className="mdi mdi-clock-outline"></i> 1
                                    hours ago
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="p-2 border-top">
                          <a
                            className="btn btn-sm btn-link font-size-14 btn-block text-center"
                            href="javascript:void(0)"
                          >
                            <i className="mdi mdi-arrow-right-circle mr-1"></i> View
                            More..
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="dropdown d-inline-block">
                      <button
                        type="button"
                        className="btn header-item waves-effect"
                        id="page-header-user-dropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          className="rounded-circle header-profile-user"
                          src="assets/images/users/avatar-2.jpg"
                          alt="Header Avatar"
                        />
                        <span className="d-none d-xl-inline-block ml-1">
                          Patrick
                        </span>
                        <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        {/*        <!-- item--> */}
                        <a className="dropdown-item" href="#">
                          <i className="bx bx-user font-size-16 align-middle mr-1"></i>{" "}
                          Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="bx bx-wallet font-size-16 align-middle mr-1"></i>{" "}
                          My Wallet
                        </a>
                        <a className="dropdown-item d-block" href="#">
                          <span className="badge badge-success float-right">
                            11
                          </span>
                          <i className="bx bx-wrench font-size-16 align-middle mr-1"></i>{" "}
                          Settings
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="bx bx-lock-open font-size-16 align-middle mr-1"></i>{" "}
                          Lock screen
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-danger" href="#">
                          <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>{" "}
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* <!-- LOGO --> */}
                    <div className="navbar-brand-box">
                      <a href="index.html" className="logo logo-dark">
                        <span className="logo-sm">
                          <img
                            src="assets/images/logo-sm.pn"
                            alt=""
                            height="20"
                          />
                        </span>
                        <span className="logo-lg">
                          <img
                            src="assets/images/logo-dark.png"
                            alt=""
                            height="17"
                          />
                        </span>
                      </a>

                      <a href="index.html" className="logo logo-light">
                        <span className="logo-sm">
                          <img
                            src="assets/images/logo-sm.png"
                            alt=""
                            height="20"
                          />
                        </span>
                        <span className="logo-lg d-flex">
                          {/*  <!-- <img src="assets/images/logo-light.png" alt="" height="19"> --> */}
                          <h4 className="text-light pt-4"><a href="/dashboard" style={{color:"white"}}>ClubRummy</a></h4>
                        </span>
                      </a>
                    </div>

                    <button
                      type="button"
                      className="btn btn-sm px-3 font-size-16 header-item toggle-btn waves-effect"
                      id="vertical-menu-btn"
                    >
                      <i className="fa fa-fw fa-bars"></i>
                    </button>

                    <div className="dropdown dropdown-mega d-none d-lg-inline-block ml-2">
                      <button
                        type="button"
                        className="btn header-item waves-effect"
                        data-toggle="dropdown"
                        aria-haspopup="false"
                        aria-expanded="false"
                      >
                        Mega Menu
                        <i className="mdi mdi-chevron-down"></i>
                      </button>
                      <div className="dropdown-menu dropdown-megamenu">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="row">
                              <div className="col-md-4">
                                <h5 className="font-size-14 mt-0">UI Components</h5>
                                <ul className="list-unstyled megamenu-list">
                                  <li>
                                    <a href="javascript:void(0);">Lightbox</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Range Slider
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Sweet Alert
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Rating</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Forms</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Tables</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Charts</a>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-md-4">
                                <h5 className="font-size-14 mt-0">Applications</h5>
                                <ul className="list-unstyled megamenu-list">
                                  <li>
                                    <a href="javascript:void(0);">Ecommerce</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Calendar</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Email</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Projects</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Tasks</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Contacts</a>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-md-4">
                                <h5 className="font-size-14 mt-0">Extra Pages</h5>
                                <ul className="list-unstyled megamenu-list">
                                  <li>
                                    <a href="javascript:void(0);">
                                      Light Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Compact Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Horizontal layout
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Maintenance
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Coming Soon
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Timeline</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">FAQs</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="row">
                              <div className="col-sm-6">
                                <h5 className="font-size-14 mt-0">Components</h5>
                                <div className="px-lg-2">
                                  <div className="row no-gutters">
                                    <div className="col">
                                      <a className="dropdown-icon-item" href="#">
                                        <img
                                          src="assets/images/brands/github.png"
                                          alt="Github"
                                        />
                                        <span>GitHub</span>
                                      </a>
                                    </div>
                                    <div className="col">
                                      <a className="dropdown-icon-item" href="#">
                                        <img
                                          src="assets/images/brands/bitbucket.png"
                                          alt="bitbucket"
                                        />
                                        <span>Bitbucket</span>
                                      </a>
                                    </div>
                                    <div className="col">
                                      <a className="dropdown-icon-item" href="#">
                                        <img
                                          src="assets/images/brands/dribbble.png"
                                          alt="dribbble"
                                        />
                                        <span>Dribbble</span>
                                      </a>
                                    </div>
                                  </div>

                                  <div className="row no-gutters">
                                    <div className="col">
                                      <a className="dropdown-icon-item" href="#">
                                        <img
                                          src="assets/images/brands/dropbox.png"
                                          alt="dropbox"
                                        />
                                        <span>Dropbox</span>
                                      </a>
                                    </div>
                                    <div className="col">
                                      <a className="dropdown-icon-item" href="#">
                                        <img
                                          src="assets/images/brands/mail_chimp.png"
                                          alt="mail_chimp"
                                        />
                                        <span>Mail Chimp</span>
                                      </a>
                                    </div>
                                    <div className="col">
                                      <a className="dropdown-icon-item" href="#">
                                        <img
                                          src="assets/images/brands/slack.png"
                                          alt="slack"
                                        />
                                        <span>Slack</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6">
                                <div>
                                  <div
                                    className="card text-white mb-0 overflow-hidden text-white-50"
                                    style={{
                                      backgroundImage:
                                        "assets/images/megamenu-img.png",
                                      backgroundSize: "cover",
                                    }}
                                  >
                                    <div className="card-img-overlay"></div>
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-xl-6">
                                          <h4 className="text-white mb-3">Sale</h4>

                                          <h5 className="text-white-50">
                                            Up to{" "}
                                            <span className="font-size-24 text-white">
                                              50 %
                                            </span>{" "}
                                            Off
                                          </h5>
                                          <p>
                                            At vero eos accusamus et iusto odio.
                                          </p>
                                          <div className="mb-4">
                                            <a
                                              href="#"
                                              className="btn btn-success btn-sm"
                                            >
                                              View more
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            </div>
        )
    }
}

export default Header
