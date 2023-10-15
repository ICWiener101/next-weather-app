'use client';
import { HourlyData } from '@/models/Weather';
import {
      createColumnHelper,
      flexRender,
      getCoreRowModel,
      getPaginationRowModel,
      useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { degreesToWindDirection, weatherDescIcon } from '@/lib/util';
import { motion } from 'framer-motion';

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
      is_day: number;
};
const columnHelper = createColumnHelper<HourlyTable>();
const columns = [
      columnHelper.accessor('time', {
            header: 'Time',
            cell: (info) => info.getValue().toString().split('T')[1],
      }),
      columnHelper.accessor('weathercode', {
            header: 'Description',
            cell: ({ row }) => (
                  <div className="flex items-center justify-evenly w-full">
                        {
                              weatherDescIcon(
                                    row.original.weathercode,
                                    row.original.is_day
                              )?.description
                        }
                        <img
                              src={
                                    weatherDescIcon(
                                          row.original.weathercode,
                                          row.original.is_day
                                    )?.iconUrl
                              }
                              alt={
                                    weatherDescIcon(
                                          row.original.weathercode,
                                          row.original.is_day
                                    )?.description
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
            cell: (info) => (
                  <span className="bg-transparent font-bold">
                        {degreesToWindDirection(info.getValue())}
                  </span>
            ),
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
                        is_day: weatherData.weathercode[index],
                  }))
                  .filter((data) => {
                        const dataTime = new Date(data.time);
                        const dataHour = dataTime.getHours();

                        return dataHour >= hour || dataTime > new Date();
                  });
            setData(newData);
      }, [weatherData, hour]);

      const table = useReactTable({
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel(),
      });

      return (
            <div className="p-2 max-w-6xl mx-auto rounded-xl">
                  <motion.table
                        key={`${weatherData.time[0]}-${weatherData.apparent_temperature[0]}`}
                        animate={{ x: '0%' }}
                        transition={{ duration: 0.4 }}
                        initial={{ x: '-100%' }}
                        className="text-center rounded-xl border-0 table-auto w-full border-slate-300 bg-gradient-to-b from-sky-100 to-sky-200 shadow-xl hover:shadow-2xl rounded-b-xl"
                  >
                        <thead className="h-12">
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
                                          className="border border-l-0 border-r-0 border-b-0 border-slate-300 h-12  hover:bg-currentWeatherBlue"
                                    >
                                          {row.getVisibleCells().map((cell) => (
                                                <td
                                                      className="bg-transparent"
                                                      key={cell.id}
                                                >
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
                        <tfoot className="text-center rounded-xl border-0 border-t table-auto  border-slate-300 h-12">
                              <tr>
                                    <td colSpan={8}>
                                          <div className="mx-auto w-1/3 flex justify-evenly">
                                                <button
                                                      onClick={() =>
                                                            table.previousPage()
                                                      }
                                                      disabled={
                                                            !table.getCanPreviousPage()
                                                      }
                                                >
                                                      Previous
                                                </button>{' '}
                                                <button
                                                      className="hover:text-[#3099EA]"
                                                      onClick={() =>
                                                            table.nextPage()
                                                      }
                                                      disabled={
                                                            !table.getCanNextPage()
                                                      }
                                                >
                                                      Next
                                                </button>
                                          </div>
                                    </td>
                              </tr>
                        </tfoot>
                  </motion.table>
                  <div className="h-4" />
            </div>
      );
}

export default HourlyForecast;
