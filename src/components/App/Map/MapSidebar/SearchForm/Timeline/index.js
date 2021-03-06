import React, {Component} from 'react'
import {XYPlot, XAxis, YAxis, Highlight, VerticalBarSeries} from 'react-vis'

export default class Timeline extends Component {
    constructor(props) {
        super(props)
        this.handleFormEvent = this.handleFormEvent.bind(this)
        this.updateDragState = this.updateDragState.bind(this)
    }

    handleFormEvent(e) {
        this.props.onFormEvent(e.target.value)
    }

    updateDragState(area) {
        this.props.onFormEvent('range', [area && area.left, area && area.right])
    }

    render() {
        const selectionStart = this.props.range.start
        const selectionEnd = this.props.range.end
        const dateStart = new Date(selectionStart)
        const dateEnd = new Date(selectionEnd)
        const data = this.props.timelineData
        return (
            <div className='uk-margin-small-top'>
                <XYPlot width={this.props.width} height={150} xDomain={[new Date('1/1/1600').getTime(), new Date().getTime()]}>
                    <XAxis tickFormat={v => new Date(v).getFullYear()}/>
                    <YAxis />
                    <VerticalBarSeries
                        data={data}
                        fill='gray'
                        colorType="literal"
                        getColor={d => {
                            if (selectionStart === null || selectionEnd === null) {
                                return '#1E96BE';
                            }
                            const inX = d.x >= selectionStart && d.x <= selectionEnd;
                            const inX0 = d.x0 >= selectionStart && d.x0 <= selectionEnd;
                            const inStart = selectionStart >= d.x0 && selectionStart <= d.x;
                            const inEnd = selectionEnd >= d.x0 && selectionEnd <= d.x;

                            return inStart || inEnd || inX || inX0 ? '#12939A' : '#1E96BE';
                        }}
                    />
                    <Highlight
                        color="#829AE3"
                        drag
                        enableY={false}
                        onDrag={this.updateDragState}
                        onDragEnd={this.updateDragState}
                    />
                </XYPlot>
                <div className='uk-flex uk-flex-center uk-margin-small-top'>
                    <select onChange={this.handleFormEvent} className="uk-select uk-form-width-small">
                        <option value={'day-birth'}>Date of Birth</option>
                        <option value={'day-death'}>Date of Death</option>
                    </select>

                </div>
                {selectionEnd && selectionStart &&
                <div className='uk-flex uk-flex-center uk-margin-small-top'>
                    <p>from {`${dateStart.getFullYear()}-${dateStart.getMonth()}-${dateStart.getDate()}`} to {`${dateEnd.getFullYear()}-${dateEnd.getMonth()}-${dateEnd.getDate()}`}</p>
                </div>
                }
            </div>
        )
    }
}