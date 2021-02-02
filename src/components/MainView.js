import React from 'react'

const MainView = () => {
    return (
            <div className="mainside">
        <div className="container">
                    <div className="leftside">
                        <div className="post">
                            <div className="posttitle">
                                <div className="titleflex">
                                <div className="avatar">
                                <img width="42px" src="https://instagram.fvdc8-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fvdc8-1.fna.fbcdn.net&_nc_ohc=tV0P-ansAXgAX94cbWr&oh=0d04f07b5ec8d22a2854550dcc71f062&oe=6044370F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" alt="" />
                                </div>
                                <div className="username">sabitalizade</div>
                                </div>
                                <div className="more">
                                    <img src="./icons/more.svg" alt="" />
                                </div>
                            </div>
                            <div className="postimg">
                                <img src="https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/e35/144569358_367231584720289_4541175679544088524_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=b3KQmfXU7-YAX85YyVe&tp=1&oh=5d7ff62ef92fc8717de8efcb0e6c4f6d&oe=604267EA" alt="" />
                            </div>
                            <div className="postinteraction">
                                <div className="iflex">
                                <ul>
                                    <li>
                                        <a href="1">
                                        <img src="./icons/like.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="1">
                                        <img src="./icons/comment.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="1">
                                        <img src="./icons/direct.svg" alt="" />
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                <div className="save">
                                    <img src="./icons/save.svg" alt="" />
                                </div>
                            </div>
                            <div className="postcomment"></div>
                            <div className="addcomment"></div>
                        </div>
                    </div>
                    <div className="rightside">right</div>
            </div>
            
        </div>
    )
}

export default MainView
