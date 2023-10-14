'use client';
import { HourlyData } from '@/models/Weather';
import {
      createColumnHelper,
      flexRender,
      getCoreRowModel,
      useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import { degreesToWindDirection, weatherDescIcon } from '@/lib/util';
type HourlyProps = {
      weatherData: HourlyData;
};
type HourlyTable = {
      time: string;
      temperature_2m: number;
      apparent_temperature: number;
      precipitation_probability: number;
      windspeed_10m: number;
      winddirection_10m: number;
      uv_index: number;
      weathercode: number;
};
const columnHelper = createColumnHelper<HourlyTable>();
const columns = [
      columnHelper.accessor('time', {
            header: 'Time',
            cell: (info) => info.getValue().toString().split('T')[1],
      }),
      columnHelper.accessor('weathercode', {
            header: 'Description',
            cell: (info) => (
                  <div className="flex items-center justify-evenly w-full">
                        {weatherDescIcon(info.getValue(), 1)?.description}
                        <img
                              src={weatherDescIcon(info.getValue(), 1)?.iconUrl}
                              alt={
                                    weatherDescIcon(info.getValue(), 1)
                                          ?.description
                              }
                              className="w-7 h-full"
                        />
                  </div>
            ),
      }),
      columnHelper.accessor('temperature_2m', {
            header: 'Temperature',
            cell: (info) => `${Math.ceil(info.getValue())}°C`,
      }),
      columnHelper.accessor('apparent_temperature', {
            header: 'Feels Like',
            cell: (info) => `${Math.ceil(info.getValue())}°C`,
      }),
      columnHelper.accessor('precipitation_probability', {
            header: 'Chances of Rain',
            cell: (info) => `${Math.ceil(info.getValue())}%`,
      }),
      columnHelper.accessor('windspeed_10m', {
            header: 'Wind Speed',
            cell: (info) => `${Math.ceil(info.getValue())} m/s`,
      }),
      columnHelper.accessor('winddirection_10m', {
            header: 'Wind Direction',
            cell: (info) => degreesToWindDirection(Math.ceil(info.getValue())),
      }),
      columnHelper.accessor('uv_index', {
            header: 'UV Index',
            cell: (info) => Math.ceil(info.getValue()),
      }),
];
function HourlyForecast({ weatherData }: HourlyProps) {
      const currentTime = new Date();
      const hour = currentTime.getHours();

      const [data, setData] = useState<HourlyTable[]>([]);

      useEffect(() => {
            const newData: HourlyTable[] = weatherData.time
                  .map((time, index) => ({
                        time: weatherData.time[index],
                        temperature_2m: weatherData.temperature_2m[index],
                        apparent_temperature:
                              weatherData.apparent_temperature[index],
                        precipitation_probability:
                              weatherData.precipitation_probability[index],
                        windspeed_10m: weatherData.windspeed_10m[index],
                        winddirection_10m: weatherData.winddirection_10m[index],
                        uv_index: weatherData.uv_index[index],
                        weathercode: weatherData.weathercode[index],
                  }))
                  .filter((data) => {
                        const dataTime = new Date(data.time);
                        const dataHour = dataTime.getHours();

                        return dataHour >= hour || dataTime > new Date();
                  })
                  .slice(0, 10);
            setData(newData);
      }, [weatherData, hour]);

      const table = useReactTable({
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
      });

      return (
            <div className="p-2 max-w-6xl mx-auto rounded-lg overflow-hidden">
                  <table className="text-center rounded-lg table-auto w-full bg-gradient-to-b border border-slate-300 from-sky-100 to-sky-200 shadow-xl hover:shadow-2xl">
                        <thead>
                              {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                          {headerGroup.headers.map(
                                                (header, index) => (
                                                      <th key={index}>
                                                            {header.isPlaceholder
                                                                  ? null
                                                                  : flexRender(
                                                                          header
                                                                                .column
                                                                                .columnDef
                                                                                .header,
                                                                          header.getContext()
                                                                    )}
                                                      </th>
                                                )
                                          )}
                                    </tr>
                              ))}
                        </thead>
                        <tbody>
                              {table.getRowModel().rows.map((row, index) => (
                                    <tr
                                          key={index}
                                          className=" border border-slate-300 h-12"
                                    >
                                          {row.getVisibleCells().map((cell) => (
                                                <td key={cell.id}>
                                                      {flexRender(
                                                            cell.column
                                                                  .columnDef
                                                                  .cell,
                                                            cell.getContext()
                                                      )}
                                                </td>
                                          ))}
                                    </tr>
                              ))}
                        </tbody>
                  </table>
                  <div className="h-4" />
            </div>
      );
}

export default HourlyForecast;
