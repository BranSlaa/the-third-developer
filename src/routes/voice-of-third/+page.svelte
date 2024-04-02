<script>
	import { onMount } from "svelte";
	import Draggable from '../../lib/Draggable.svelte';

	const API_ENDPOINT = 'https://mandrillapp.com/api/1.0/messages/send';
	let csv, password, fileInput, ignorelistFileInput, locationHostname;
	let replacementStringInput, subject, subjectReplacementStringInput, ignorelistFileContent;
	let fileContent, emailTextInput, columns, selectedNameColumn, selectedSubjectColumn, selectedEmailColumn;
	let apiKey = import.meta.env.VITE_MANDRILL_API_KEY;
	let pw = import.meta.env.VITE_VOICE_PASSWORD;
	let ignoreArray = [];
	let progressAmount = 0;
	let count, fileCount, ignorelistFileCount = 0;
	let testEmail = 'branslaa@gmail.com';
	let fromEmail = 'jack@fattallegal.com';
	let subjectInput = 'Inquiry from Fattal Legal PLLC - {{company}}';
	let replacementString = '{{name}}';
	let subjectReplacementString = '{{company}}';
	let emailText = `<div dir="ltr">
		<p>Dear {{name}},</p>
		<br>
		<p>I am reaching out to see if you have any interest in a referral arrangement with my firm, Fattal Legal PLLC, should you have any clients that require a corporate and securities attorney. Having worked both in-house and in law firms, across corporate, securities, M&A and real estate law, my legal experience is unique.</p>
		<br>
		<p>
			For your consideration, please note my law firm website,
			<strong>
				<a href="https://mandrillapp.com/track/click/31507467/fattallegal.com?p=eyJzIjoiTmU3TEV3OHMwZDBTM0c3MG5NS2s4cnRxaDZnIiwidiI6MSwicCI6IntcInVcIjozMTUwNzQ2NyxcInZcIjoxLFwidXJsXCI6XCJodHRwOlxcXC9cXFwvZmF0dGFsbGVnYWwuY29tXFxcL1wiLFwiaWRcIjpcImVhZWI4MWVkOGJiNzRiZmM4YmE1NDc3NTM5NmJlMDljXCIsXCJ1cmxfaWRzXCI6W1wiMWM2NDljMDkzYjM4Y2Q3Yjc1YmE4ZmIyYTI2MmU4NWQ5ZmY5Yzk4N1wiXX0ifQ"
					id="m_-6002395602624647452m_1970476161965459081m_-1674809859583985670m_-5915180632718281613m_-6958545866954057562m_-282793025844465184m_8941542679448545950m_-2166160337350006483m_-1980819654890607052m_2412463137804061028OWA18e1aa00-6eed-04f6-499c-6e8a43341e24"
					target="_blank"
					data-saferedirecturl="https://www.google.com/url?q=https://mandrillapp.com/track/click/31507467/fattallegal.com?p%3DeyJzIjoiTmU3TEV3OHMwZDBTM0c3MG5NS2s4cnRxaDZnIiwidiI6MSwicCI6IntcInVcIjozMTUwNzQ2NyxcInZcIjoxLFwidXJsXCI6XCJodHRwOlxcXC9cXFwvZmF0dGFsbGVnYWwuY29tXFxcL1wiLFwiaWRcIjpcImVhZWI4MWVkOGJiNzRiZmM4YmE1NDc3NTM5NmJlMDljXCIsXCJ1cmxfaWRzXCI6W1wiMWM2NDljMDkzYjM4Y2Q3Yjc1YmE4ZmIyYTI2MmU4NWQ5ZmY5Yzk4N1wiXX0ifQ&source=gmail&ust=1710513595717000&usg=AOvVaw2Y4gtEmBqaT3_UW0XzZgZt">fattallegal.com</a></strong>, as well as my latest <a
				href="https://mandrillapp.com/track/click/31507467/1c52ec99-0f1f-4b42-8a08-0bc279855175.usrfiles.com?p=eyJzIjoid253RXhMeTFNSElwSk9FeHNrVERFZE9ZU1o0IiwidiI6MSwicCI6IntcInVcIjozMTUwNzQ2NyxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcLzFjNTJlYzk5LTBmMWYtNGI0Mi04YTA4LTBiYzI3OTg1NTE3NS51c3JmaWxlcy5jb21cXFwvdWdkXFxcLzFjNTJlY19lZTRmOTRkZjRjNzg0ODMyYWUzMDRmNGQ1NzM3NzJlMC5wZGZcIixcImlkXCI6XCJlYWViODFlZDhiYjc0YmZjOGJhNTQ3NzUzOTZiZTA5Y1wiLFwidXJsX2lkc1wiOltcIjdkODEzNmU4ZmU1MTJjMTlmMmZmNGMyMWE0ZGYzOGIzYTM4NDY5MzVcIl19In0"
				id="m_-6002395602624647452m_1970476161965459081m_-1674809859583985670m_-5915180632718281613m_-6958545866954057562m_-282793025844465184m_8941542679448545950m_-2166160337350006483m_-1980819654890607052m_2412463137804061028OWA02b9e305-6459-2950-88e0-5213136a50e6"
				target="_blank"
				data-saferedirecturl="https://www.google.com/url?q=https://mandrillapp.com/track/click/31507467/1c52ec99-0f1f-4b42-8a08-0bc279855175.usrfiles.com?p%3DeyJzIjoid253RXhMeTFNSElwSk9FeHNrVERFZE9ZU1o0IiwidiI6MSwicCI6IntcInVcIjozMTUwNzQ2NyxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcLzFjNTJlYzk5LTBmMWYtNGI0Mi04YTA4LTBiYzI3OTg1NTE3NS51c3JmaWxlcy5jb21cXFwvdWdkXFxcLzFjNTJlY19lZTRmOTRkZjRjNzg0ODMyYWUzMDRmNGQ1NzM3NzJlMC5wZGZcIixcImlkXCI6XCJlYWViODFlZDhiYjc0YmZjOGJhNTQ3NzUzOTZiZTA5Y1wiLFwidXJsX2lkc1wiOltcIjdkODEzNmU4ZmU1MTJjMTlmMmZmNGMyMWE0ZGYzOGIzYTM4NDY5MzVcIl19In0&source=gmail&ust=1710513595717000&usg=AOvVaw0dC5QD7Qp6y_l05_F1p3Ia"
				jslog="32272; 1:WyIjdGhyZWFkLWY6MTc5MzIxMzMzOTUyODczNDIwMnxtc2ctZjoxNzkzNTEyOTAyMjg5MjU4OTkxIl0.; 4:WyIjbXNnLWY6MTc5MzUxMjkwMjI4OTI1ODk5MSJd">Resume</a>
				and an <a
				href="https://mandrillapp.com/track/click/31507467/1c52ec99-0f1f-4b42-8a08-0bc279855175.usrfiles.com?p=eyJzIjoiV1p5M1V5TURLZVRmQ013THl1Y1ZnTDd6OWdJIiwidiI6MSwicCI6IntcInVcIjozMTUwNzQ2NyxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcLzFjNTJlYzk5LTBmMWYtNGI0Mi04YTA4LTBiYzI3OTg1NTE3NS51c3JmaWxlcy5jb21cXFwvdWdkXFxcLzFjNTJlY183MDRlYTg0NGQ0OWQ0ZmE4YjEzM2I2OWNiNDUzYTA2Yy5wZGZcIixcImlkXCI6XCJlYWViODFlZDhiYjc0YmZjOGJhNTQ3NzUzOTZiZTA5Y1wiLFwidXJsX2lkc1wiOltcIjE2YmVhY2RhOTVmNDE3YzM4YzY5ZTgyMmE5MjFlMTIyMDdjODBkNjhcIl19In0"
				id="m_-6002395602624647452m_1970476161965459081m_-1674809859583985670m_-5915180632718281613m_-6958545866954057562m_-282793025844465184m_8941542679448545950m_-2166160337350006483m_-1980819654890607052m_2412463137804061028OWA2ba62f56-7990-1b77-bcc9-51ef4c62f79a"
				target="_blank"
				data-saferedirecturl="https://www.google.com/url?q=https://mandrillapp.com/track/click/31507467/1c52ec99-0f1f-4b42-8a08-0bc279855175.usrfiles.com?p%3DeyJzIjoiV1p5M1V5TURLZVRmQ013THl1Y1ZnTDd6OWdJIiwidiI6MSwicCI6IntcInVcIjozMTUwNzQ2NyxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcLzFjNTJlYzk5LTBmMWYtNGI0Mi04YTA4LTBiYzI3OTg1NTE3NS51c3JmaWxlcy5jb21cXFwvdWdkXFxcLzFjNTJlY183MDRlYTg0NGQ0OWQ0ZmE4YjEzM2I2OWNiNDUzYTA2Yy5wZGZcIixcImlkXCI6XCJlYWViODFlZDhiYjc0YmZjOGJhNTQ3NzUzOTZiZTA5Y1wiLFwidXJsX2lkc1wiOltcIjE2YmVhY2RhOTVmNDE3YzM4YzY5ZTgyMmE5MjFlMTIyMDdjODBkNjhcIl19In0&source=gmail&ust=1710513595717000&usg=AOvVaw1Cq2ms3TRqGWCSI6yg1_Hx"
				jslog="32272; 1:WyIjdGhyZWFkLWY6MTc5MzIxMzMzOTUyODczNDIwMnxtc2ctZjoxNzkzNTEyOTAyMjg5MjU4OTkxIl0.; 4:WyIjbXNnLWY6MTc5MzUxMjkwMjI4OTI1ODk5MSJd">Information
				Sheet</a>
				<i>(Click to view).</i>
		</p>
		<br>
		<p>Please let me know if you'd like to schedule a call to discuss.</p>
		<br>
		<p>Thanks & regards,</p>
		<br>
		<p>Jack</p>
		<br/>
		<div>
			<div>
				<div>
					<div><img
							src="https://ci3.googleusercontent.com/meips/ADKq_NbKnOT2CtyM4WaOPK1jKFH8f3ZriVXDMdNwBeiIDdw4-46nJvJ7PcX6Esd_TT6Db655EJ9VrL8gtX3uR6fLcsh0cetbBhbBa9IZg4PICGkRQyUgaEFbYsQJxAh4Ug=s0-d-e1-ft#https://visitvisit.com/wp-content/uploads/2024/03/Fattal-Legal-PLLC.png"
							alt="Logo dark green.png" width="167" height="72" style="margin-right:0px" class="CToWUd"
							data-bit="iit"><br></div>
					<div><b>
							<font face="tahoma, sans-serif" color="#000000">Jack A. Fattal, ESQ.</font>
						</b></div>
					<div><b>
							<font face="tahoma, sans-serif" color="#000000">Attorney at Law</font>
						</b></div>
					<div><b>
							<font face="tahoma, sans-serif" color="#000000"><br></font>
						</b></div>
					<div>
						<font face="tahoma, sans-serif" color="#000000">30 Wall Street, 8th Floor, New York, NY 
							10005<br></font>
						<div>
							<font face="tahoma, sans-serif" color="#000000">Direct: +1 (917) 480-1169</font>
						</div>
						<div>
							<font face="tahoma, sans-serif" color="#000000"><a href="mailto:jack@fattallegal.com"
									target="_blank">jack@fattallegal.com</a>  <span
									style="font-size:13px">|</span>  <a
									href="https://mandrillapp.com/track/click/31507467/fattallegal.com?p=eyJzIjoiMWdabTFIQVFKY0FKdHRwakMzU2NEeFN4Y0h3IiwidiI6MSwicCI6IntcInVcIjozMTUwNzQ2NyxcInZcIjoxLFwidXJsXCI6XCJodHRwOlxcXC9cXFwvZmF0dGFsbGVnYWwuY29tXFxcL1wiLFwiaWRcIjpcIjljODg2ZTJjNTU5MzQzZGQ4YmY0N2FlZGYzODE2ODBkXCIsXCJ1cmxfaWRzXCI6W1wiMWM2NDljMDkzYjM4Y2Q3Yjc1YmE4ZmIyYTI2MmU4NWQ5ZmY5Yzk4N1wiXX0ifQ"
									target="_blank"
									data-saferedirecturl="https://www.google.com/url?q=https://mandrillapp.com/track/click/31507467/fattallegal.com?p%3DeyJzIjoiMWdabTFIQVFKY0FKdHRwakMzU2NEeFN4Y0h3IiwidiI6MSwicCI6IntcInVcIjozMTUwNzQ2NyxcInZcIjoxLFwidXJsXCI6XCJodHRwOlxcXC9cXFwvZmF0dGFsbGVnYWwuY29tXFxcL1wiLFwiaWRcIjpcIjljODg2ZTJjNTU5MzQzZGQ4YmY0N2FlZGYzODE2ODBkXCIsXCJ1cmxfaWRzXCI6W1wiMWM2NDljMDkzYjM4Y2Q3Yjc1YmE4ZmIyYTI2MmU4NWQ5ZmY5Yzk4N1wiXX0ifQ&source=gmail&ust=1710513595718000&usg=AOvVaw3X3NdkYT618_TZpmfXlHg8">www.<wbr>fattallegal.com</a>
							</font>
						</div>
						<div>
							<font face="tahoma, sans-serif" color="#000000"><br></font>
						</div>
						<div>
							<table cellpadding="0" cellspacing="0" border="0" style="font-size:0px;width:996px">
								<tbody>
									<tr>
										<td align="left" style="vertical-align:top">
											<table cellpadding="0" cellspacing="0" border="0" style="color:rgb(0,0,1)">
												<tbody>
													<tr style="font-size:13px">
														<td align="left" style="vertical-align:top">
															<font face="tahoma, sans-serif" color="#000000"> <br>
															</font>
														</td>
													</tr>
													<tr>
														<td align="left" style="vertical-align:top">
															<table cellpadding="0" cellspacing="0" border="0"
																style="font-size:13px;font-family:Calibri,Arial,sans-serif;text-align:justify;width:996px">
																<tbody>
																	<tr style="font-size:13px">
																		<td>
																			<font face="tahoma, sans-serif" color="#000000">
																				<span
																					style="text-decoration-line:underline">Privileged
																					Information</span>: This message,
																				together with any attachments, is intended
																				only for the use of the individual or entity
																				to which it is addressed and may contain
																				information that is legally privileged,
																				confidential and/or exempt from disclosure.
																				If you are not the intended recipient, you
																				are hereby notified that any use,
																				dissemination, distribution, or copying of
																				this message, or any attachment, is strictly
																				prohibited. If you have received this
																				message in error, please delete this
																				message, along with any attachments, from
																				your computer. Thank you. </font>
																		</td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`;
	let emailOutput = emailText;

	let start, end;
	
	onMount(() => {
		emailTextInput = document.getElementById("email-text");
		fileInput = document.getElementById("file-input");
		ignorelistFileInput = document.getElementById("ignore-list-file-input");
		replacementStringInput = document.getElementById("replacement-string");
		subjectReplacementStringInput = document.getElementById("subject-replacement-string");
		locationHostname = location.hostname;

		emailTextInput && emailTextInput.addEventListener('input', (e) => {
			loadCSV(e);
		});
		
		replacementStringInput && replacementStringInput.addEventListener('input', () => {
			loadCSV();
		});
		
		subjectReplacementStringInput && subjectReplacementStringInput.addEventListener('input', () => {
			setSubject();
		});
		
		fileInput && fileInput.addEventListener('change', (e) => {
			const selectedFile = e.target.files[0];
			const reader = new FileReader();
			reader.onload = function (event) {
				fileContent = event.target.result;
				loadCSV();
				setSubject();
				setSelectVariables();
			};
			reader.readAsText(selectedFile);
		});

		ignorelistFileInput && ignorelistFileInput.addEventListener('change', (e) => {
			const selectedFile = e.target.files[0];
			const reader = new FileReader();
			reader.onload = function (event) {
				ignorelistFileContent = event.target.result;
				ignoreArray = ignorelistFileContent.split('\r\n');
				if(ignoreArray) {
					ignorelistFileCount = ignoreArray.length;
				}
			};
			reader.readAsText(selectedFile);
		});
	});

	function loadCSV(e = '') {
		if(fileContent && fileContent.length > 0) {
			csv = csvToJson(fileContent);
			if(csv) {
				fileCount = csv.length;
				updateEmailOutput()
			}
		} else {
			if(e) {
				emailOutput = e.target.value;
			}
		}
	}

	function updateEmailOutput() {
		if((emailText && emailText.length > 0)) {
			emailOutput = emailText.replace(replacementString, csv[0][selectedNameColumn]);
		} 
	}

	function setSubject() {
		subject = subjectInput.replace(subjectReplacementString, csv[0][selectedSubjectColumn]);
	}

	function setSelectVariables() {
		if(columns) {
			if(columns.includes('Email')) {
				selectedEmailColumn = "Email";
			} else if(columns.includes('email')) {
				selectedEmailColumn = "email";
			} else if(columns.includes('Email Address')) {
				selectedEmailColumn = "Email Address";
			} else if(columns.includes('email address')) {
				selectedEmailColumn = "email address";
			} else if(columns.includes('email_address')) {
				selectedEmailColumn = "email_address";
			}

			if(columns.includes('First Name')) {
				selectedNameColumn = 'First Name';
			} else if(columns.includes('first name')) {
				selectedNameColumn = 'first name';
			} else if(columns.includes('first_name')) {
				selectedNameColumn = 'first_name';
			} else if(columns.includes('first')) {
				selectedNameColumn = 'first';
			} else if(columns.includes('name')) {
				selectedNameColumn = 'name';
			}

			if(columns.includes('Company')) {
				selectedSubjectColumn = 'Company';
			} else if(columns.includes('company')) {
				selectedSubjectColumn = 'company';
			} else if(columns.includes('Company Name')) {
				selectedSubjectColumn = 'Company Name';
			} else if(columns.includes('company name')) {
				selectedSubjectColumn = 'company name';
			} else if(columns.includes('company_name')) {
				selectedSubjectColumn = 'company_name';
			}
		}

		updateEmailOutput();
		setSubject();
	}

	/*
	* @param {string} quoteChar A character to use as the encapsulating character.
	* @param {string} delimiter A character to use between columns.
	* @returns {object[]} An array of JavaScript objects containing headers as keys
	* and row entries as values.
	*/
	function csvToJson(text, headers, quoteChar = '"', delimiter = ',') {
		const regex = new RegExp(`\\s*(${quoteChar})?(.*?)\\1\\s*(?:${delimiter}|$)`, 'gs');

		const match = line => [...line.matchAll(regex)]
			.map(m => m[2])  // we only want the second capture group
			.slice(0, -1);   // cut off blank match at the end

		const lines = text.split('\n');
		const heads = headers ?? match(lines.shift());
		columns = heads;
		return lines.map(line => {
			return match(line).reduce((acc, cur, i) => {
			// Attempt to parse as a number; replace blank matches with `null`
			const val = cur.length <= 0 ? null : Number(cur) || cur;
			const key = heads[i] ?? `extra_${i}`;
			return { ...acc, [key]: val };
			}, {});
		});
	}

	function incrementProgress() {
		count++;
		progressAmount = (count / fileCount) * 100;
		if(progressAmount == 100) {
			end = performance.now();
			console.log(`It took ${end - start} ms.`);
		}
	}

	const sendTransactionalEmail = async (recipient) => {
		const payload = {
			key: apiKey,
			message: {
				from_email: fromEmail,
				to: [{ email: recipient }],
				subject: subject,
				html: emailOutput
			}
		};

		try {
			const response = await fetch(API_ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});

			const data = await response.json();
			console.log(data);
			incrementProgress();
		} catch (error) {
			console.error('Error:', error);
		}
	};


	function triggerSendEmails() {
		let ignoreIgnore = false;
		console.log(ignorelistFileCount);
		if(ignorelistFileCount == 0 && confirm('!!No Ignore List!!')) {
			ignoreIgnore = true;
		} else {
			ignoreIgnore = false;
		}

		if(ignoreIgnore) {
			count = 0;
			progressAmount = 0;
			start = performance.now();
			const filteredCsv = csv.filter(function(row) {
				return ignoreArray.includes(row[selectedEmailColumn]) === false;
			});
			console.log(csv);
			console.log(filteredCsv);
			if(fileCount > 0 && confirm(`Confirm Send of ${filteredCsv.length}`)) {
				filteredCsv.forEach(element => {
					if(element[selectedEmailColumn]) {
						// sendTransactionalEmail(element[selectedEmailColumn]);
					} else {
						incrementProgress();
					}
				});
			}
		}
	}
	
	function triggerSendTestEmail() {
		sendTransactionalEmail(testEmail);
	}
</script>

<div class="px-4 py-16 max-w-4xl mx-auto">
	<h1 class='text-center mb-8 text-4xl font-bold'>Voice of Third</h1>
	<label for='password' class='block col-span-2 mb-4'>Password
		<input id='password' type='password' bind:value={password} class='block w-full border-2 border-sky-500 bg-sky-100 p-2'/>
	</label>
	<!-- {#if password == pw || locationHostname == 'localhost'} -->
		<form action='' method='post' class='grid grid-cols-2 gap-4 mb-8'>
			<label for='api-key'>API Key
				<input id='api-key' type='text' name='api-key' bind:value={apiKey} class='block w-full border-2 border-yellow-500 bg-yellow-100 p-2'>
			</label>

			<div>
				<label for='file-input'>Upload Send List CSV
					<input id='file-input' type='file' accept="csv" name='file-input' class='block w-full p-2 border-2 border-dashed border-yellow-500 hover:bg-amber-200'>
					<input id='file-contents' type='hidden' name='file-contents' bind:value={fileContent}>
				</label>
				<p>File {#if fileCount}has {fileCount} row{#if fileCount > 1}s{/if}{:else}does not exist{/if}.</p>
			</div>
			
			<label for='from-email'>From Email
				<input id='from-email' type='email' name='from-email' bind:value={fromEmail} class='block w-full border-2 border-pink-500 bg-pink-100 p-2'>
			</label>

			<label for='test-email'>Test Email
				<input id='test-email' type='email' name='test-email' bind:value={testEmail} class='block w-full border-2 border-emerald-500 bg-emerald-100 p-2'>
			</label>
			
			<div>
				<label for='email-column-select'>Email Column{#if !columns}&nbsp;-&nbsp;Please upload csv.{/if}
					<select id='email-column-select' name='email-column-select' bind:value={selectedEmailColumn} class='block w-full border-2 border-pink-500 bg-pink-100 p-2'>
						{#if columns}
							<option>Select Email Column</option>
							{#each columns as column}
								{#if column}
									<option value={column}>
										{column}
									</option>
								{/if}
							{/each}
						{/if}
					</select>
				</label>
				<p><strong>Recipient:</strong> {#if selectedEmailColumn}{csv[0][selectedEmailColumn]}{/if}</p>
			</div>

			<label for='subject'>Subject
				<input id='subject' type='text' name='subject' bind:value={subjectInput} class='block w-full border-2 border-sky-500 bg-sky-100 p-2'>
			</label>
			
			<div>
				<label for='subject-column-select'>Subject Replacement Column{#if !columns}&nbsp;-&nbsp;Please upload csv.{/if}
					<select id='subject-column-select' name='subject-column-select' bind:value={selectedSubjectColumn} on:change={() => setSubject()} class='block w-full border-2 border-sky-500 bg-sky-100 p-2'>
						{#if columns}
							<option>Select Subject Column</option>
							{#each columns as column}
								{#if column}
									<option value={column}>
										{column}
									</option>
								{/if}
							{/each}
						{/if}
					</select>
				</label>
				<p><strong>Subject:</strong>{#if subject}&nbsp;{subject}{/if}</p>
			</div>

			<div>
				<label for='name-column-select'>Name Replacement Column{#if !columns}&nbsp;-&nbsp;Please upload csv.{/if}
					<select id='name-column-select' name='name-column-select' bind:value={selectedNameColumn} on:change={() => loadCSV()} class='block w-full border-2 border-sky-500 bg-sky-100 p-2'>
						{#if columns}
							<option>Select a Column</option>
							{#each columns as column}
								{#if column}
									<option value={column}>
										{column}
									</option>
								{/if}
							{/each}
						{/if}
					</select>
				</label>
			</div>

			<label for='subject-replacement-string'>Subject Replacement String
				<input id='subject-replacement-string' type='text' name='subject-replacement-string' bind:value={subjectReplacementString} class='block w-full border-2 border-sky-500 bg-sky-100 p-2'>
			</label>

			<label for='replacement-string'>Text Replacement String
				<input id='replacement-string' type='text' name='replacement-string' bind:value={replacementString} class='block w-full border-2 border-sky-500 bg-sky-100 p-2'>
			</label>

			<label for='email-text' class='col-span-2'>Enter Text or HTML
				<textarea id='email-text' name='email-text' bind:value={emailText} class='block w-full border-2 border-sky-500 bg-sky-100 p-2' rows='10'></textarea>
			</label>

			<div class='col-span-2'>
				<label for='ignore-list-file-input'>Upload Ignore List CSV
					<input id='ignore-list-file-input' type='file' accept="csv" name='ignore-list-file-input' class='block w-full p-2 border-4 border-dashed border-red-500 #hover:bg-red-100'>
					<input id='ignore-list-file-contents' type='hidden' name='file-contents' bind:value={ignorelistFileContent}>
				</label>
				<p>File {#if ignorelistFileCount}has {ignorelistFileCount} row{#if ignorelistFileCount > 1}s{/if}{:else}does not exist{/if}.</p>
			</div>
		</form>

		{#if progressAmount != 0 && progressAmount != 100}
			<progress id='sending-progress' value={progressAmount} max='100' class='w-full'>
				Sending {progressAmount}%
			</progress>
		{/if}
		{#if progressAmount == 100}
			<h2 class="text-3xl text-center text-emerald-700 font-bold">Complete!!</h2>
		{/if}
		<div class='grid max-w-md grid-cols-2 gap-4 mx-auto mt-8'>
			<button id='send-emails' class='bg-red-700 p-4 text-white hover:bg-red-500' on:click={triggerSendEmails}>Send {#if fileCount > 0}{fileCount}{:else}0{/if} Emails</button>
			<button id='send-test' class='bg-green-700 p-4 text-white hover:bg-green-500'on:click={triggerSendTestEmail}>Send Test</button>
		</div>

		{#if emailOutput}
			<Draggable>
				<div id="csv-output">
					{@html emailOutput}
				</div>
			</Draggable>
		{/if}
	<!-- {/if} -->
</div>

<style>
</style>
