import React, { Component } from 'react';
import axios from 'axios'
import { WorkSection , WorkTitle , WorkPart , Span , WorkIcon , PartTitle , PartDesc , Line } from './style.js'

class Work extends Component {

    state = { work : [] };

    componentDidMount(){
        axios.get('js/data.json').then(res => this.setState({work : res.data.works}));
    }

    
    render () {
        const {work} = this.state;
        const worklist = work.map(workitem => {
            return (
                <WorkPart first={workitem.id} key={workitem.id} >
                    <WorkIcon className={workitem.icon_name}></WorkIcon>
                    <PartTitle>{workitem.title}</PartTitle>
                    <Line/>
                    <PartDesc id='portfolio'>
                        {workitem.body}
                    </PartDesc>
                </WorkPart>
            )
        })

    return (
        <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {worklist}
            </div>
        </WorkSection>
    )};
}

export default Work;
