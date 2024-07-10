import '../../css/Sam/Sam_page1.css';

import { SiLeagueoflegends } from "react-icons/si";
import { IoDesktop } from "react-icons/io5";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiDuolingo } from "react-icons/si";
import { MdSportsEsports } from "react-icons/md";
import { SiRockstargames } from "react-icons/si";
import { FaRedRiver } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Sam_page1() {
    return (
        <div className='Sam_page1_containor'>
            <div className='Sam_page1_header'>
                <div className='Sam_page1_TopMenu'>
                    <div className='Sam_page1_TopLeftMenu'>
                        <span className='Sam_Page1_TopLeftAll'>로고</span>
                        <span className='Sam_Page1_TopLeftAll'>전적</span>
                        <span className='Sam_Page1_TopLeftAll'><SiLeagueoflegends className='Sam_Page1_ReactIcon' /> 리그오브레전드</span>
                        <span className='Sam_Page1_TopLeftAll'><IoDesktop className='Sam_Page1_ReactIcon' /> 데스크톱</span>
                        <span className='Sam_Page1_TopLeftAll'><SiDuolingo className='Sam_Page1_ReactIcon' /> 듀오</span>
                        <span className='Sam_Page1_TopLeftAll'><RiKakaoTalkFill className='Sam_Page1_ReactIcon' /> 톡피지지</span>
                        <span className='Sam_Page1_TopLeftAll'><SiRockstargames className='Sam_Page1_ReactIcon' /> 이스포츠</span>
                        <span className='Sam_Page1_TopLeftAll'><MdSportsEsports className='Sam_Page1_ReactIcon' /> 게임즈</span>
                        <span className='Sam_Page1_TopLeftAll'><FaRedRiver className='Sam_Page1_ReactIcon' /> Gigs</span>
                    </div>
                    <div className='Sam_page1_TopRightMenu'>
                        <span className='Sam_page1_TopRightAll'>문의하기</span>
                        <span className='Sam_page1_TopRightAll'>어두워지기</span>
                        <span className='Sam_page1_TopRightAll'>언어</span>
                        <span className='Sam_page1_TopRightAll'><Link to='/'>돌아가기</Link></span>
                    </div>
                </div>
            </div>
            <div className='Sam_page1_main'>
                <div className='Sam_page1_menu'>
                    <div className='Sam_page1_subLeftMenu'>
                        <span className='sam_Page1_subLeftAll'>홈</span>
                        <span className='sam_Page1_subLeftAll'>챔피언 분석</span>
                        <span className='sam_Page1_subLeftAll'>게임 모드</span>
                        <span className='sam_Page1_subLeftAll'>통계</span>
                        <span className='sam_Page1_subLeftAll'>랭킹</span>
                        <span className='sam_Page1_subLeftAll'>프로 관전</span>
                        <span className='sam_Page1_subLeftAll'>멀티서치</span>
                        <span className='sam_Page1_subLeftAll'>커뮤니티</span>
                        <span className='sam_Page1_subLeftAll'>강의</span>
                    </div>
                    <div className='Sam_page1_subRightMenu'>
                        <span className='sam_Page1_subRightAll'>마이페이지</span>
                    </div>
                </div>
                <div className='Sam_page1_body'>
                    <div className='Sam_Page1_body1'>
                        <span className='sam_Page_middleImg'></span>
                    </div>
                    <div className='Sam_Page1_body2'>
                        <div className='Sam_Page1_inputBox'>
                            <div className='Sam_Page1_inputBoxChild Sam_Page1_inputBoxChild1'>
                                <span>지역</span>
                                <span>검색</span>
                            </div>
                            <div className='Sam_Page1_inputBoxChild'>
                                <select className='Sam_Page1_Select'>
                                    <option>korea</option>
                                    <option>japan</option>
                                    <option>china</option>
                                    <option>North America</option>
                                </select>
                                <input type='text' placeholder='플레이어 이름 + #KR1' className='Sam_Page1_input' />
                            </div>
                        </div>
                    </div>
                    <div className='Sam_Page1_body3'>
                        <div className='Sam_Page1_adverBox'>
                            <div className='Sam_Page1_adver1'>광</div>
                            <div className='Sam_Page1_adver2'>고</div>
                        </div>
                    </div>
                    <div className='Sam_Page1_body4'>
                        <div className='Sam_Page1_info'>
                            <div className='Sam_Page1_infoLeft'>
                                <div className='Sam_Page_infoLeft_title'>OP.GG Talk 인기글</div>
                                <div className='Sam_Page1_infoLeft_detail'>
                                    <span>1</span>
                                    <span>사진</span>
                                    <div>
                                        <div>원터밤</div>
                                        <div>시간전</div>
                                    </div>
                                </div>
                                <div className='Sam_Page1_infoLeft_detail'>
                                    <span>2</span>
                                    <span>사진</span>
                                    <div>
                                        <div>원터밤</div>
                                        <div>시간전</div>
                                    </div>
                                </div>
                                <div className='Sam_Page1_infoLeft_detail'>
                                    <span>3</span>
                                    <span>사진</span>
                                    <div>
                                        <div>원터밤</div>
                                        <div>시간전</div>
                                    </div>
                                </div>
                                <div className='Sam_Page1_infoLeft_detail'>
                                    <span>4</span>
                                    <span>사진</span>
                                    <div>
                                        <div>원터밤</div>
                                        <div>시간전</div>
                                    </div>
                                </div>
                                <div className='Sam_Page1_infoLeft_detail'>
                                    <span>5</span>
                                    <span>사진</span>
                                    <div>
                                        <div>원터밤</div>
                                        <div>시간전</div>
                                    </div>
                                </div>

                            </div>
                            <div className='Sam_Page1_infoRight'>
                                <div>이미지일듯</div>
                                <div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                </div>
                                <div>8</div>
                                <div>
                                    <div>9</div>
                                    <div>10</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Sam_page1_footer'>footer</div>
            </div>
        </div>
    )
}